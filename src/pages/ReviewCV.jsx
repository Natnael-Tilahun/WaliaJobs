import React, { useRef } from 'react';
import { CVTemplate } from './CVDetails/CVTemplate';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { FormSections } from '../utils/FormSections';
import { useDispatch, useSelector } from 'react-redux';
import { SET_COMPLETED } from '../features/cv/cvCompletionInfoSlice';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import { useState } from 'react';
import { SET_CV_LEFT_SECTION_BACKGROUND_COLOR } from '../features/cv/cvThemeSlice';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const ReviewCV = () => {
  const navigate = useNavigate();
  const { id: CV_ID } = useParams();
  const dispatch = useDispatch();
  const componentRef = useRef();
  const [CVColor, setCVColor] = useState("bg-blue-500")
  const { firstName, lastName } = useSelector((state) => state.personalInfo);
  const [downloadExpanded, setDownloadExpanded] = useState(false)
  const handleSubmit = () => {
    dispatch(SET_COMPLETED(FormSections.FINALIZE));
    navigate(`/CV-Details/${CV_ID}`);
  };
  const [fileType, setFileType] = useState('pdf')
  const [loader, setLoader] = useState(false)

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownload = async (element) => {
    const fileName = (firstName == "") ? "Walia Jobs Resume" : `${firstName} ${lastName}'s Resume WaliaJobs`
    setLoader(true)
    if (fileType == 'png' || fileType == "jpg") {
      const html = document.getElementsByTagName('HTML')[0];
      const body = document.getElementsByTagName('BODY')[0]
      let htmlWidth = html.clientWidth;
      let bodyWidth = body.clientWidth;
      body.style.width = '1350px'

      const canvas = await html2canvas(element)
      const image = canvas.toDataURL(fileType, 1.0)
      const a = window.document.createElement("a")
      a.href = image;
      a.download = (fileName + `.${fileType}`)
      a.click();
      html.style.width = 'auto'
      body.style.width = 'auto'
      setLoader(false)
    }
    else if (fileType == 'pdf') {
      const canvas = await html2canvas(element)
      const image = canvas.toDataURL('img/png')
      const doc = new jsPDF('p', 'mm', 'a4')
      const componentWidth = doc.internal.pageSize.getWidth()
      const componentHeight = doc.internal.pageSize.getHeight()
      doc.addImage(image, 'PNG', 0, 0, componentWidth, componentHeight)
      doc.save(fileName + ".pdf")
      setLoader(false)
    }

  }

  const cvThemeColorChangeHandler = (color) => {
    dispatch(SET_CV_LEFT_SECTION_BACKGROUND_COLOR(color))
  }

  return (
    <div className=" h-[1450px] py-4  lg:p-[40px] w-full  flex flex-col lg:flex-row lg:justify-evenly gap-0 lg:gap-10 px-3 md:px-5 ">
      <CVTemplate
        reff={componentRef}
        CVColor={CVColor}
        id="cv-template"
        className="order-2 md:order-1 lg:w-[900px] h-[1270px] basis-auto"
      />

      <div className=" lg:order-2 py-5 basis-1/4  self-center lg:self-start md:px-10  lg:px-5 md:text-xl font-bold flex flex-col gap-4 md:gap-3 ">
        <div className=' w-full'>
          <h1 className='text-lg'>Choose A color</h1>
          <div className='flex flex-wrap gap-3 py-3'>
            <p className='w-6 h-6 rounded-full bg-slate-800' onClick={() => cvThemeColorChangeHandler("bg-slate-800")}></p>
            <p className='w-6 h-6 rounded-full bg-blue-800' onClick={() => cvThemeColorChangeHandler("bg-blue-800")}></p>
            <p className='w-6 h-6 rounded-full bg-orange-800' onClick={() => cvThemeColorChangeHandler("bg-orange-800")}></p>
            <p className='w-6 h-6 rounded-full bg-red-800' onClick={() => cvThemeColorChangeHandler("bg-red-800")}></p>
            <p className='w-6 h-6 rounded-full bg-green-800' onClick={() => cvThemeColorChangeHandler("bg-green-800")}></p>
            <p className='w-6 h-6 rounded-full bg-lime-800' onClick={() => cvThemeColorChangeHandler("bg-lime-800")}></p>
            <p className='w-6 h-6 rounded-full bg-teal-800' onClick={() => cvThemeColorChangeHandler("bg-teal-800")}></p>
            <p className='w-6 h-6 rounded-full bg-cyan-800' onClick={() => cvThemeColorChangeHandler("bg-cyan-800")}></p>
            <p className='w-6 h-6 rounded-full bg-sky-800' onClick={() => cvThemeColorChangeHandler("bg-sky-800")}></p>
            <p className='w-6 h-6 rounded-full bg-indigo-800' onClick={() => cvThemeColorChangeHandler("bg-indigo-800")}></p>
            <p className='w-6 h-6 rounded-full bg-violet-800 ' onClick={() => cvThemeColorChangeHandler("bg-violet-800")}></p>
            <p className='w-6 h-6 rounded-full bg-purple-800' onClick={() => cvThemeColorChangeHandler("bg-purple-800")}></p>
            <p className='w-6 h-6 rounded-full bg-fuchsia-800' onClick={() => cvThemeColorChangeHandler("bg-fuchsia-800")}></p>
            <p className='w-6 h-6 rounded-full bg-pink-800' onClick={() => cvThemeColorChangeHandler("bg-pink-800")}></p>
            <p className='w-6 h-6 rounded-full bg-rose-800' onClick={() => cvThemeColorChangeHandler("bg-rose-800")}></p>
            <p className='w-6 h-6 rounded-full bg-yellow-800' onClick={() => cvThemeColorChangeHandler("bg-yellow-800")}></p>
            <p className='w-6 h-6 rounded-full bg-zinc-800' onClick={() => cvThemeColorChangeHandler("bg-zinc-800")}></p>
            <p className='w-6 h-6 rounded-full bg-neutral-800' onClick={() => cvThemeColorChangeHandler("bg-neutral-800")}></p>
          </div>
        </div>
        <button
          onClick={handlePrint}
          className="flex gap-3 border-[1px] py-2 px-2 shadow-md rounded-lg hover:border-thm_root1_color hover:bg-blue-50 md:gap-5 hover:text-thm_root1_color cursor-pointer"
        >
          <span>
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7 17H17V22H7V17ZM19 20V15H5V20H3C2.44772 20 2 19.5523 2 19V9C2 8.44772 2.44772 8 3 8H21C21.5523 8 22 8.44772 22 9V19C22 19.5523 21.5523 20 21 20H19ZM5 10V12H8V10H5ZM7 2H17C17.5523 2 18 2.44772 18 3V6H6V3C6 2.44772 6.44772 2 7 2Z"></path>
            </svg>
          </span>
          Print
        </button>
        <button className="flex items-center gap-3 py-1 px-2 shadow-md rounded-lg md:gap-5 border-[1px] hover:border-thm_root1_color hover:bg-blue-50 hover:text-thm_root1_color cursor-pointer"
          onClick={() => setDownloadExpanded(prevState => !prevState)}>
          <span>
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM14 9H19L12 16L5 9H10V3H14V9Z"></path>
            </svg>
          </span>
          <p className='mr-auto'>Download</p>
          {!downloadExpanded ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-7'><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg> :
            <svg xmlns="http://www.w3.org/2000/svg" className='w-7' viewBox="0 0 24 24"><path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"></path></svg>}
        </button>
        {downloadExpanded &&
          <div className='flex rounded-lg flex-col gap-3 px-2 py-5 shadow-md border-2 bg-thm_card'>
            <select onChange={(e) => { setFileType(e.currentTarget.value) }} className=' w-full border-2 py-2 rounded-xl px-2 focus:border-thm_root1_color focus:outline-none' name="" id="">
              <option value="" disabled>File Type</option>
              <option value="pdf">
                PDF
              </option>
              <option value="png">
                PNG
              </option>
              <option value="jpg">
                JPG
              </option>
            </select>
            <button disabled={!(loader === false)} onClick={() => handleDownload(componentRef.current)} className='w-full border-2 p-2 rounded-xl bg-thm_root1_color text-white'>{loader ? "Downloading" : "Download"}</button>
          </div>}
        <button className="flex border-[1px] py-2 px-2 shadow-md rounded-lg hover:border-thm_root1_color hover:bg-blue-50 gap-3 md:gap-5 hover:text-thm_root1_color cursor-pointer">
          <span>
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
            </svg>
          </span>
          Email
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="flex gap-3 border-[1px] py-2 px-2 shadow-md rounded-lg hover:border-thm_root1_color hover:bg-blue-50 md:gap-5 hover:text-thm_root1_color"
        >
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21 6.75736L19 8.75736V4H10V9H5V20H19V17.2426L21 15.2426V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V6.75736ZM21.7782 8.80761L23.1924 10.2218L15.4142 18L13.9979 17.9979L14 16.5858L21.7782 8.80761Z"></path>
          </svg>
          Edit Again
        </button>
      </div>
    </div>
  );
};
