import { useField } from 'formik';
import React, { useState } from 'react'

export default function CVProfileUpload({ onChange, ...props }) {
    const [field, meta] = useField(props);
    const [preview, setPreview] = useState();
const handleChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
        setPreview(reader.result)
        onChange(reader.result)
    }
    reader.readAsDataURL(file)
}
    return (
        <div className='flex flex-col basis-[100%] lg:basis-[45%]  gap-1 md:gap-2'>
            <label htmlFor="profilePic">Choose files</label>{" "}
            <input onChange={(e) => handleChange(e)}  type="file" 
            className="p-2 w-full border-2 rounded-md bg-white focus:border-thm_root1_color focus:outline-none" />
            {meta.touched && meta.error ? (
                <div style={{ color: "red" }}>{meta.error}</div>
            ) : null}
        </div>
    )
}
