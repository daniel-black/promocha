import { prisma } from "@/lib/db";
import { FormSchema } from "@/lib/schemas";
import { hashPassword, passwordsMatch } from "@/utils/cryptography";
import { createToken } from "@/utils/jwt";

export async function POST(req: Request) {
  const body = await req.json();
  const parsedBody = FormSchema.parse(body);

  // try to find an existing user with the same email
  const existingUser = await prisma.user.findUnique({
    where: { email: parsedBody.email }
  });

  // return a bad response if the user already exists
  if (existingUser) {
    return new Response(null, {
      status: 400,
      statusText: 'A user with that email already exists'
    });
  }

  // hash that password
  const hashedPassword = await hashPassword(parsedBody.password);

  // create a new user
  const newUser = await prisma.user.create({
    data: {
      email: parsedBody.email,
      password: hashedPassword,
    }
  });

  // create a jwt with the user id as the payload
  const accessToken = createToken(newUser.id);

  // return a response
  return new Response(null, {
    status: 201,
    statusText: 'Successful sign up',
    headers: {
      'Set-Cookie': `access_token=${accessToken}; Path=/; HttpOnly`
    },
  });
}