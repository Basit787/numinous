"use client";
import Loading from "@/app/loading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactData } from "@/data/contact";
import { queryClient } from "@/services/client";
import { sendEmail } from "@/services/email.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const { mutate, isPending: isLoading } = useMutation({
    mutationKey: ["sendEmail"],
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      const result = await sendEmail(data);
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["signIn"] });
      toast("Email sent successfully");
      form.reset();
    },
    onError: () => {
      toast("Failed to sent email");
      form.setError("firstName", { type: "manual" });
      form.setError("lastName", { type: "manual" });
      form.setError("email", { type: "manual" });
      form.setError("message", {
        type: "manual",
        message: "Failed to sent the email!",
      });
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    mutate(data);
  }

  if (isLoading) return <Loading />;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="bg-[var(--neutral-900)]/50 backdrop-blur-sm border border-[var(--neutral-800)] rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-[var(--white)] mb-8">
          {contactData.form.title}
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-[var(--neutral-300)]">
                      {contactData.form.fields[0].label}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-[var(--neutral-800)] border-[var(--neutral-700)] text-[var(--white)]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-[var(--neutral-300)]">
                      {contactData.form.fields[1].label}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-[var(--neutral-800)] border-[var(--neutral-700)] text-[var(--white)]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-[var(--neutral-300)]">
                    {contactData.form.fields[2].label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className="bg-[var(--neutral-800)] border-[var(--neutral-700)] text-[var(--white)]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-[var(--neutral-300)]">
                    {contactData.form.fields[3].label}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="bg-[var(--neutral-800)] border-[var(--neutral-700)] text-[var(--white)] min-h-[120px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-[var(--teal-600)] hover:bg-[var(--teal-400)] text-[var(--white)] py-3 font-medium"
              disabled={!!isLoading}
            >
              {contactData.form.buttonText}
            </Button>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
