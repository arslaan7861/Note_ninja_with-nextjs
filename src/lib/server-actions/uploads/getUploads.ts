'use server'
import User from '@/lib/DB/userSchema'
async function getUploads(username:string) {
  const user = await User.findOne({username})
  return user.uploads.length >0 ?user.uploads:false
}

export default getUploads