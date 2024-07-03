import { $fetch } from 'ohmyfetch/node'

/**
 * It is highly recommended to use enviroment variables instead of hardcoded secrets.
 */
const SECRET_KEY = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'

/**
 * This is an example that demonstrates how verifying reCAPTCHA on the server side works.
 * Do not use this middleware in your production.
 */
export default defineEventHandler(async (event) => {
  try {
    const { token } = await readBody(event)

    if (!token) {
      return JSON.stringify({
        success: false,
        message: 'Invalid token',
      })
    }

    const response = await $fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`,
    )

    if (response.success) {
      return JSON.stringify({
        success: true,
        message: 'Token verifyed',
        response: response,
      })
    }
    else {
      return JSON.stringify({
        success: false,
        message: 'Invalid token',
        response: response,
      })
    }
  }
  catch (e) {
    console.log('ReCaptcha error:', e)
    return JSON.stringify({
      success: false,
      message: 'Internal error',
    })
  }
})
