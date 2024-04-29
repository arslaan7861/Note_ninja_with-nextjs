import Upload from '@/components/buttons/UploadButton';
import getUploads from '@/lib/server-actions/uploads/getUploads'
import React from 'react'

async function Uploads() {
 const uploads:[]|boolean = await getUploads('arslaan7861')
 console.log(uploads);
 

  return (
    <div className='h-screen w-screen pt-16 '>
      <Upload></Upload>
      <h3 className='text-center text-xl uppercase font-bold p-2 border'>uploads</h3>
      <section>
{
  uploads?'you have uploads':'you dont have any uploads'
}
      </section>
    </div>
  )
}

export default Uploads