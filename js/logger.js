export const log = (message, errorType = 'development') => {
  if(process.env.SEND_LOG_TO_SERVER){

  }
  console.log(message)
}
