import { Button } from "@/components/ui/button";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Instant Expertise at Your Fingertips",
    description:
      "Forget the days of flipping through stacks of paper to find one crucial detail. With ProcedurePal, every procedure is just a question away. Ask anything, and get precise answers instantly—turning every operator into an instant expert.",
    icon: GlobeIcon,
  },
  {
    name: "Dynamic Learning Experience",
    description:
      "Static is out; dynamic is in. Our technology does more than just display your procedures; it breathes life into them. Engage with your documents like never before—interactive and responsive, ensuring you not only read but understand and master your tasks.",
    icon: ZapIcon,
  },
  {
    name: "Tailored Insights, Unmatched Precision",
    description:
      "Why settle for one-size-fits-all answers when you can have insights tailor-made for your specific needs? ProcedurePal understands the context of your questions, offering solutions and suggestions that are as unique as your operational challenges.",
    icon: BrainCogIcon,
  },
  {
    name: "Reduce Training Time, Amplify Efficiency",
    description:
      "Speed through training with a tool that teaches as you use it. ProcedurePal slashes learning curves and training time, dramatically amplifying operational efficiency and productivity across the board.",
    icon: EyeIcon,
  },
  {
    name: "Always-On Assistant",
    description:
      "Whether you need a mid-shift query or a refresher on a rarely used procedure, your digital companion is always on, 24/7. Just like having a trainer available at all times, but without the need for scheduling or waiting.",
    icon: ServerCogIcon,
  },
  {
    name: "Empowerment Through Innovation",
    description:
      "Empower your team with more than just a tool; give them an innovation. ProcedurePal elevates everyday operations, transforming routine tasks into opportunities for continuous learning and professional growth.",

    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Your Interactive Procedure Partner
            </h2>

            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your Procedures into Engaging Dialogues
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600">ProcedurePal.</span>
              <br />
              <br /> 
              <span className="font-bold text-indigo-600">Step 1: </span>
              Upload your operating procedures
              <br/>
              <span className="font-bold text-indigo-600">Step 2: </span>
              Ask our AI assistant anything you want about the procedure
              <br/>
              <span className="font-bold text-indigo-600">Step 3: </span>
              Enjoy the feeling of being 10x more efficient
              <br/>
              Ideal for anyone in operations, <span className="text-indigo-600">
                ProcedurePal
              </span>{" "}
              makes static procedures a thing of the past, turning them into{" "}
              <span className="font-bold">dynamic, engaging conversations</span>.
            </p>
          </div>

          <Button asChild className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>

        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="App screenshot"
              src="https://static.wixstatic.com/media/6d8ffc_591befbdf8a44f8ea14a1db4af557673~mv2.png"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  />
                </dt>

                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}