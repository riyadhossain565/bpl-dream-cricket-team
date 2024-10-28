import logoImg from "../../assets/logo-footer.png";
const Footer = () => {
  return (
    <div className="relative">
      <div className="w-5/6 mx-auto my-6 p-4 border rounded-2xl shadow-lg absolute bottom-[432px] left-28 bg-white">
        <div
          className="h-full bg-cover bg-no-repeat rounded-xl py-20 border"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/6Zn8PsN/bg-shadow.png)",
            height: "300",
          }}
        >
          <h1 className=" font-bold text-3xl text-center ">
            Subscribe to our Newsletter
          </h1>
          <p className="my-4 text-center">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex gap-4 justify-center items-center">
            <input
              type="email"
              className="pl-6 pr-12 py-3 rounded-lg border"
              placeholder="Enter Your Email"
              required
            />
            <button className="px-7 py-3 bg-[#E7FE29] rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#060917] pt-36">
        <div className="py-10 ">
          <img className="mx-auto" src={logoImg} alt="" />
          <div className="grid grid-cols-3 justify-evenly w-5/6 mx-auto my-6">
            <div className="pr-32">
              <h4 className="font-bold text-white">About Us</h4>
              <p className="mt-2 text-[#FFFFFF99]">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div className="pl-20 ">
              <h4 className="font-bold text-white">Quick Links</h4>
              <ul className="list-disc ml-4 mt-2 text-[#FFFFFF99]">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white">Subscribe</h4>
              <p className="my-2 text-[#FFFFFF99]">
                Subscribe to our newsletter for the latest updates.
              </p>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-6 py-2 border rounded-l-lg"
              />
              <button className="py-2 px-6 rounded-r-lg font-bold border bg-[#E7FE29]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t">
          <p className="text-center py-6 text-[#FFFFFF99] text-sm">
            @2024 Your Company All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
