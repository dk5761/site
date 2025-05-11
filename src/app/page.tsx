import Image from "next/image";
import profile from "@/assets/images/profile.jpg";
import Connect from "@/components/connect";
import { connectMap } from "@/utils/data";
import IconEmbed from "@/components/iconEmbed";
import { flutter, framer, react, redux, tailwind } from "@/utils/image";

export default function Home() {
  return (
    <section className="w-full h-full p-2 px-8 justify-between flex flex-col">
      <div className="flex flex-col flex-1 ">
        <Image
          src={profile}
          className="w-26 h-26 rounded-lg mb-8"
          alt="profile"
        />

        <h1 className="mb-4 font-bold text-2xl">Hey, I am Darshan. 👋</h1>

        <p className="prose prose-neutral dark:prose-invert mb-4">
          As a passionate Software Developer with a keen eye for user
          experience, I specialize in crafting intuitive, responsive, and
          visually appealing web and mobile interfaces. My core expertise lies
          in leveraging the power of modern JavaScript frameworks, particularly
          React and React Native, to build dynamic and engaging applications
          from the ground up.
          <br />
          <br />I am highly proficient in utilizing tools like TailwindCSS for
          rapid UI development, Tanstack-Query for efficient data management,
          and Next.js for optimized, server-rendered experiences, always aiming
          to create seamless interactions for the end-user.
        </p>
      </div>
      <div className="flex flex-col bottom-0 self-end ">
        <h1 className="font-bold text-xl mb-2">Connect</h1>
        <section className="flex flex-wrap ">
          {connectMap.map((item) => {
            return (
              <Connect
                key={item.alt}
                iconUrl={item.iconUrl}
                url={item.url}
                labelText={item.label}
                alt={item.alt}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
}
