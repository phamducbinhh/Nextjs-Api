/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { placeHolderStyle, resetOutline } from "@/configs/classNames";
import { Button } from "@/components/ui/button";

export default function Login() {
  const formSchema = z.object({
    email: z.string().min(1, { message: "Yêu cầu nhập email" }),
    password: z.string().min(6, { message: "Yêu cầu nhập password" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="grid grid-cols-10 text-primary">
      <div className="col-span-4 grid place-items-center">
        <img
          src="/jpg/banner-login.jpg"
          alt="login"
          className="w-full object-contain"
        />
      </div>
      <div className="col-span-6 p-8">
        <p className="font-bold text-base">Xin chào bạn</p>
        <p className="font-bold text-2xl">Đăng nhập để tiếp tục</p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="my-6 space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email hoặc số điện thoại</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(resetOutline, placeHolderStyle)}
                      placeholder="VD:0145446445 hoặc user@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(resetOutline, placeHolderStyle)}
                      placeholder="Mật khẩu tối thiểu 6 ký tự"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button size="lg" className="w-full relative top-2">
              Đăng nhập
            </Button>
          </form>
        </Form>
        <div className="w-full h-6 flex items-center relative mb-4">
          <div className="w-full h-[1px] bg-stone-200"></div>
          <div className="absolute inset-0 bg-transparent w-fix">
            <p className="px-2 w-fit mx-auto bg-white text-sm text-primary text-center">
              Hoặc
            </p>
          </div>
        </div>
        <Button size="lg" variant="outline" className="w-full mb-4">
          <img
            src="/svg/google.svg"
            alt="google"
            className="w-5 h-5 object-cover"
          />
          <span>Đăng ký với Google</span>
        </Button>
        <p className="text-center text-sm">
          <span>Bạn chưa là thành viên?</span>
          <span className="text-red-600 font-bold cursor-pointer hover:underline">
            Đăng ký
          </span>
          <span>Tại đây</span>
        </p>
      </div>
    </div>
  );
}
