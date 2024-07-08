import React from "react";
import Header from "../components/header";
import Skill from "../components/skill";
import Heading from "../components/heading";
import Sideline from "../components/sideline";
import Footer from "../components/footer";
import Review from "../components/review";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col m-auto container max-w-screen-lg justify-center p-5">
        <div className="flex flex-row pt-10 pb-10">
          <div className="flex flex-row text-white w-full h-full justify-between">
            <div>
              <h1 className="text-3xl">Franky Lu,</h1>
              <h1 className="text-3xl">Full Stack Software Engineer</h1>
              <p>3 years of experience in web application development using</p>
              <p>
                <span className="text-blue-300 font-bold">Go</span>,{" "}
                <span className="text-blue-300 font-bold">Typescript</span> and{" "}
                <span className="text-blue-300 font-bold">React</span>.
              </p>
            </div>
            <img
              src="images/icons/me.jpg"
              alt="Me"
              className="rounded-full w-1/4 h-1/4"
            />
          </div>
        </div>
        <Heading value="Technical Skills"></Heading>
        <div className="pt-10 pb-10">
          <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
            <Skill src="images/icons/go.png" desc="Go" />
            <Skill src="images/icons/python.png" desc="Python" />
            <Skill src="images/icons/typescript.png" desc="Typescript" />
            <Skill src="images/icons/react.png" desc="React" />
            <Skill src="images/icons/gc.png" desc="Google Cloud" />
            <Skill src="images/icons/postgres.png" desc="PostgreSQL" />
            <Skill src="images/icons/graphql.png" desc="GraphQL" />
            <Skill src="images/icons/terraform.png" desc="Terraform" />
            <Skill src="images/icons/git.png" desc="Git" />
            <Skill src="images/icons/html.png" desc="HTML" />
            <Skill src="images/icons/restapi.png" desc="RESTful APIs" />
            <Skill src="images/icons/vscode.png" desc="Visual Studio Code" />
          </ul>
        </div>
        <Heading value="Endorsements" />
        <div className="grid grid-cols-1 gap-y-2 pt-10 pb-10">
          <Review>
            <div>
              <p>
                Franky whilst being our youngest team member, was the most
                accomplished and most output driven engineer.
              </p>
              <br />
              <p>
                He is a great IC but also a highly collaborative team member, he
                understands that the work required to build great products is
                not him going around being a super hero, but moving away from
                the spotlight to let others shine equally, really meaning, he
                would make himself always available to bounce ideas off with
                other team members, proactive and thorough with code reviews,
                always happy to help solve complicated problems.
              </p>
              <br />
              <p>
                He has a brilliant career ahead of him, and whoever snaps him
                next is counting themselves lucky.
              </p>
              <br />
              <p>Karen Ferreria (Product Manager) from HappyCo</p>
            </div>
          </Review>
          <Review>
            <div>
              <p>
                Big shout out to Franky on the RangeWater attachments front-end
                work. Without you, the team would have struggled to get the
                project deployed this week. Thank you for taking on the
                challenge!
              </p>
              <br />
              <p>
                Furthermore, on several occasions over the last few months, I
                have asked Franky to jump on a ticket on very short notice,
                without any information or brief, he always took care of it,
                consistently and efficiently.
              </p>
              <br />
              <p>Johan Douma (Senior Software Engineer) from HappyCo</p>
            </div>
          </Review>
          <Review>
            <div>
              <p>
                Thank you for being a very knowledgeable and helpful person who
                is always willing to help! Whenever I have code-related
                questions, thanks for always taking the time to jump on call and
                listen intently and explain concepts thoroughly!
              </p>
              <br />
              <p>Georgia Zhang (Software Engineer) from HappyCo</p>
            </div>
          </Review>
        </div>
        <Heading value="Professional Experience" />
        <div className="flex pt-10 pb-10">
          <Sideline show={true} side="left" />
          <div className="grid grid-cols-1 gap-y-2 ms-5 text-white">
            <div className="grid grid-cols-2">
              <div>
                <p className="text-2xl">Daitum</p>
              </div>
              <div>
                <p className="text-2xl text-right">Feb 2024 - May 2024</p>
              </div>
            </div>
            <p>Software Engineer </p>
            <p>
              Enhanced customer onboarding efficiency by developing{" "}
              <span className="text-blue-300 font-bold">Python</span> scripts,
              streamlining manual tasks previously conducted by the sales team.
              Utilised <span className="text-blue-300 font-bold">Java</span> to
              build API endpoints that were utilised by these scripts.
            </p>
          </div>
          <Sideline show={false} side="right" />
        </div>
        <div className="flex pt-10 pb-10">
          <Sideline show={false} side="left" />
          <div className="grid grid-cols-1 gap-y-2 ms-5 text-white">
            <div className="grid grid-cols-2">
              <div>
                <p className="text-2xl">HappyCo</p>
              </div>
              <div>
                <p className="text-2xl text-right">Jun 2023 - Dec 2023</p>
              </div>
            </div>
            <p>Software Engineer </p>
            <p>
              Specialised in{" "}
              <span className="text-blue-300 font-bold">
                full stack web development
              </span>
              , leveraging <span className="text-blue-300 font-bold"> Go</span>,
              <span className="text-blue-300 font-bold"> Typescript React</span>
              , and <span className="text-blue-300 font-bold"> GraphQL</span> to
              create seamless property incident management features. Integrated
              <span className="text-blue-300 font-bold"> third-party APIs</span>
              , improving data management processes, and enhanced cross-platform
              efficiency. Notably, I implemented the builder pattern to
              streamline local development and utilized
              <span className="text-blue-300 font-bold">
                {" "}
                Google Cloud
              </span> and{" "}
              <span className="text-blue-300 font-bold">Terraform</span> to
              establish infrastructure for secure attachment storage.
            </p>
          </div>
          <Sideline show={true} side="right" />
        </div>
        <div className="flex pt-10 pb-10">
          <Sideline show={true} side="left" />
          <div className="grid grid-cols-1 gap-y-2 ms-5 text-white">
            <div className="grid grid-cols-2">
              <div>
                <p className="text-2xl">HappyCo</p>
              </div>
              <div>
                <p className="text-2xl text-right">Jun 2021 - Jun 2023</p>
              </div>
            </div>
            <p>Junior Software Engineer</p>
            <p>
              Played a key role in the company's transition from{" "}
              <span className="text-blue-300 font-bold">Twirp</span> to{" "}
              <span className="text-blue-300 font-bold">GraphQL</span>,
              enhancing performance and reliability. Demonstrated adaptability
              and technical proficiency, I contributed to{" "}
              <span className="text-blue-300 font-bold">sprint planning</span>,
              provided technical guidance, and resolved customer support tickets
              with strong{" "}
              <span className="text-blue-300 font-bold">debugging</span> skills,
              ensuring high customer satisfaction. My effective communication
              within{" "}
              <span className="text-blue-300 font-bold">
                cross functional teams
              </span>{" "}
              facilitated successful project deliveries.
            </p>
          </div>
          <Sideline show={false} side="right" />
        </div>
        <Heading value="Education" />
        <div className="flex pt-10 pb-10">
          <Sideline show={true} side="left" />
          <div className="grid grid-cols-1 gap-y-2 ms-5 text-white">
            <p className="text-2xl">University of Adelaide</p>
            <p>Bachelor of Computer Science (Advanced) </p>
            <p>GPA: 6.625 / 7</p>
            <p>Academic Awards:</p>
            <div className="italic pl-5">
              <li>The Executive Dean's Recognition of Academic Excellence</li>
              <li> Software Engineering Prize</li>
            </div>
          </div>
          <Sideline show={false} side="right" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
