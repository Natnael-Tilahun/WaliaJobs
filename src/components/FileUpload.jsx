import { useField } from 'formik';
import React from 'react'

export default function FileUpload({ fileRef, ...props }) {
    const [field, meta] = useField(props);
    return (
        <div className='flex flex-col basis-[100%] lg:basis-[45%]  gap-1 md:gap-2'>
            <label htmlFor="profilePic">Choose files</label>{" "}
            <input ref={fileRef} multiple={true} type="file" {...field} 
            className="p-2 w-full border-2 rounded-md bg-white focus:border-thm_root1_color focus:outline-none" />
            {meta.touched && meta.error ? (
                <div style={{ color: "red" }}>{meta.error}</div>
            ) : null}
        </div>
    )
}
