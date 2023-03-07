'use client';

import { z } from 'zod';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import FormError from './form-error';

const FormSchema = z.object({
  email: z.string().trim().email({
    message: 'Must provide a valid email'
  }),
  password: z.string().trim()
    .min(8, {
      message: 'Password must be more than 8 characters'
    })
    .max(16, {
      message: 'Password must be less than 16 characters'
    })
}).required();

type FormSchemaType = z.infer<typeof FormSchema>;

type FormProps = {
  type: 'in' | 'up';
};

export default function Form({ type }: FormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitted }
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema)
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log(data)
  };

  return (
    <section className="px-6 sm:px-14 py-10 mt-20 space-y-8 bg-slate-600 shadow-lg rounded-xl mx-2 w-full max-w-lg border border-slate-500">
      <h1 className="text-2xl text-slate-200">Sign {type}</h1>
      <h2 className='text-lg text-slate-300'>{type === 'in' ? 'Welcome back' : 'Please create an account'}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className='space-y-1'>
          <label className="block text-sm text-slate-300">Email</label>
          <input
            {...register('email')}
            type="email"
            placeholder="tim@apple.com"
            className="w-full rounded p-3 outline-none bg-slate-200 hover:bg-slate-100 focus:bg-slate-50 focus:ring focus:ring-slate-400 focus:ring-inset focus:ring-offset-1 text-slate-900 text-lg transition-all duration-75"
            disabled={isSubmitting}
            required
          />
          {errors.email && <FormError message={errors.email.message} />}
        </div>
        <div className='space-y-1'>
          <label className="block text-sm text-slate-300">Password</label>
          <input
            {...register('password')}
            type="password"
            className="w-full rounded p-3 outline-none bg-slate-200 hover:bg-slate-100 focus:bg-slate-50 focus:ring focus:ring-slate-400 focus:ring-inset focus:ring-offset-1 text-slate-900 text-lg transition-all duration-75"
            disabled={isSubmitting}
            required
          />
          {errors.password && <FormError message={errors.password.message} />}
        </div>
        <div className="pt-6">
          <input
            type="submit"
            value={'SUBMIT'}
            disabled={isSubmitting}
            className="w-full text-lg bg-slate-800 text-slate-300 tracking-wider py-3 rounded cursor-pointer hover:bg-slate-900 hover:scale-105 duration-100 transition-all"
          />
        </div>
      </form>
    </section>
  );
}