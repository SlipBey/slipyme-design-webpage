import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

const AdminPage: NextPage = () => {

    const [name, setName] = useState("");
	const [password, setPassword] = useState("");
    const [auth, setAuth] = useState(false);

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        if (!name || !password) return toast.error("Alanı lütfen boş bırakma.");
		if(name == "Ahmet Eren" && password == "Ahmet.Eren.123" || name == "Macit" && password == "Macitler.Mobilya.004") {
            setAuth(true);
            toast.success("Başarıyla giriş yaptın.");
        } else {
            toast.error("Bilgiler yanlış!");
        }
	};

    if(auth == true) {
        return (
            <div className="select-none bg-gray-900 min-h-screen">
                <NextSeo
                    title="Yönetim Paneli"
                />
                <div className="flex">
                    <div className="p-7 w-full">
                    <section className="container mx-autp text-center">
                <div className="mx-auto">
                    <h1 className="text-3xl font-bold text-white md:text-4xl">
                        Slipyme Tasarım - Yönetim Paneli
                    </h1>
                    <p className="mt-6 text-xl text-gray-300">
                        Hoşgeldin, <b>{name}</b>
                    </p>
                </div>
                <div className="mx-auto mt-12 mb-12 w-full max-w-2xl">
                    <div className="bg-red-200 border-t-4 border-l-4 border-red-600 text-500 p-2 w-full">Panel Yapım Aşamasındadır.</div>
                </div>
            </section>
                    </div>
                </div>
            </div>
        );
        } else {
	return (
		<div className="select-none bg-gray-900 min-h-screen">
			<NextSeo
				title="Yetkili Girişi"
			/>
			<div className="flex">
				<div className="p-7 w-full">
                <section className="container mx-autp text-center">
			<div className="mx-auto">
				<h1 className="text-3xl font-bold text-white md:text-4xl">
                Slipyme Tasarım - Yönetim Paneli
				</h1>
				<p className="mt-6 text-xl text-gray-300">
					Dikkat! Eğer yetkili değilseniz çabuk buradan kaçınız. Aksi taktirde ip adresiniz ifşa olacaktır.
				</p>
			</div>
            <div className="mx-auto mt-12 mb-12 w-full max-w-2xl">
				<form onSubmit={onSubmit}>
					<div className="-mx-2 mb-4 flex">
						<div className="w-1/2 px-2">
							<input
								onChange={onNameChange}
								className="round block w-full appearance-none border border-gray-200 bg-gray-50 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
								type="text"
								placeholder="Kullanıcı Adınız"
							/>
						</div>
						<div className="w-1/2 px-2">
							<input
								onChange={onPasswordChange}
								className="round block w-full appearance-none border border-gray-200 bg-gray-50 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
								type="password"
								placeholder="Parolanız"
							/>
						</div>
					</div>
					<div>
						<button
							aria-label="Submit"
							className="round inline-block w-full bg-purple-600 py-4 px-8 font-semibold leading-none text-white hover:bg-purple-700"
						>
							Giriş Yap
						</button>
					</div>
				</form>
			</div>
		</section>
				</div>
			</div>
		</div>
	);
}
};

export default AdminPage;