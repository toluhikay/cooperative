import Header from "../../../dashboard/header";

export function MemberRegistration_update({ children, name }) {
	return (
		<section>
			<Header name={name} />
			<article className="container mx-auto h-screen flex items-start justify-start">
				<div class="block p-6 rounded-lg bg-white lg:w-[70%] ">{children}</div>
			</article>
		</section>
	);
}
