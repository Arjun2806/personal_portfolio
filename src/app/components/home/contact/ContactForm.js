"use client";

import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({
		email: false,
		required: false,
	});

	const isValidEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const isFormEmpty = !form.name.trim() || !form.email.trim() || !form.message.trim();
		const isEmailInvalid = !isValidEmail(form.email);

		setError({
			required: isFormEmpty,
			email: isEmailInvalid,
		});

		if (isFormEmpty) {
			toast.error("All fields are required.");
			return;
		}

		if (isEmailInvalid) {
			toast.error("Please enter a valid email address.");
			return;
		}

		setLoading(true);

		emailjs.send(
			process.env.NEXT_PUBLIC_SERVICE_ID,
			process.env.NEXT_PUBLIC_TEMPLATE_ID,
			{
				from_name: form.name,
				to_name: "Arjun",
				from_email: form.email,
				to_email: "arjunsuthar3427@gmail.com",
				message: form.message,
			},
			process.env.NEXT_PUBLIC_PUBLIC_ID
		).then(
			() => {
				setLoading(false);
				toast.success("Message sent successfully!");
				setForm({ name: "", email: "", message: "" });
				setError({ email: false, required: false });
			},
			(error) => {
				setLoading(false);
				toast.error("Something went wrong!");
				console.error("EmailJS Error:", error);
			}
		);
	};

	return (
		<div>
			<p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact with me</p>
			<div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
				<p className="text-sm text-[#d3d8e8]">{"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}</p>
				<div className="mt-6 flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<label className="text-base">Your Name:</label>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							maxLength={100}
							required
							className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2 transition-all duration-300 outline-none"
						/>
					</div>

					{/* Email */}
					<div className="flex flex-col gap-2">
						<label className="text-base">Your Email:</label>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							maxLength={100}
							required
							className={`bg-[#10172d] w-full border rounded-md px-3 py-2 transition-all duration-300 outline-none ${error.email ? "border-red-500" : "border-[#353a52] focus:border-[#16f2b3]"
								}`}
						/>
						{error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
					</div>

					{/* Message */}
					<div className="flex flex-col gap-2">
						<label className="text-base">Your Message:</label>
						<textarea
							name="message"
							value={form.message}
							onChange={handleChange}
							rows={4}
							maxLength={500}
							required
							className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2 transition-all duration-300 outline-none"
						/>
					</div>

					{/* Submit */}
					<div className="flex flex-col items-center gap-3">
						{error.required && (
							<p className="text-sm text-red-400">All fields are required!</p>
						)}
						<button
							type="submit"
							disabled={loading}
							onClick={handleSubmit}
							className="flex items-center gap-1 cursor-pointer hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200"
						>
							{loading ? (
								<span>Sending Message...</span>
							) : (
								<span className="flex items-center gap-1">
									Send Message <TbMailForward size={20} />
								</span>
							)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
