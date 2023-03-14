import { prisma } from "@/lib/db";
import { FormSchema } from "@/lib/schemas";
import { passwordsMatch } from "@/utils/cryptography";
import { createToken } from "@/utils/jwt";

export async function POST(req: Request) {
  const body = await req.json();
  const parsedBody = FormSchema.parse(body);

  // try to find user
  const user = await prisma.user.findUnique({
    where: { email: parsedBody.email }
  });

  // return a bad response if the user already exists
  if (!user) {
    return new Response(null, {
      status: 400,
      statusText: 'No user found with that email address'
    });
  }

  // check that the passwords match
  const validPassword = await passwordsMatch(parsedBody.password, user.password);
  if (!validPassword) {
    return new Response(null, {
      status: 400,
      statusText: 'Incorrect password'
    });
  }

  // create a jwt with the user id as the payload
  const accessToken = createToken(user.id);

  // return a response
  return new Response(null, {
    status: 201,
    statusText: 'Successful sign up',
    headers: {
      'Set-Cookie': `access_token=${accessToken}; Path=/; HttpOnly`
    },
  });
}