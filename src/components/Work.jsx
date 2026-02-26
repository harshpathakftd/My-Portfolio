/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/vpl1.png",
    title: "VPL User Management",
    tags: ["React", "SpringBoot", "AWS", "Jenkins", "Kubernetes"],
    projectLink: "https://vpower-logistics.com",
    description:
      "VPL User Management is a full-stack application for VPower Logistics, with a strong DevOps foundation. The product delivers a centralized admin dashboard for user lifecycle, role-based access (admin, dispatcher, client), and fleet and shipment data. From a DevOps perspective, the entire lifecycle is automated: source code is version-controlled in Git, built and tested in Jenkins with unit and integration tests, packaged as Docker images, and deployed to Kubernetes on AWS. Infrastructure is defined and provisioned with a focus on repeatability: we use containerization for consistent runtimes across dev, staging, and production. The backend integrates with AWS RDS for managed databases, S3 for static assets and backups, and EC2/Kubernetes for compute. CI/CD pipelines include automated testing, security scans, and staged rollouts so that releases are reliable and rollbacks are straightforward. Monitoring and logging are in place to track application health, latency, and errors in production. Database migrations run as part of the pipeline to keep schema and code in sync. Secrets and environment-specific config are managed outside the codebase and injected at deploy time. The goal is to treat infrastructure and application delivery as one automated, repeatable process—core to a DevOps culture.",
    content: [
      {
        text: "The application layer is built for scalability and security. The dashboard supports JWT-based authentication, RBAC, and audit logging for sensitive operations. From an infrastructure angle, the same Docker images are promoted through environments, and Kubernetes handles scaling and self-healing. Database migrations and config are managed as part of the pipeline so that every deployment is consistent and traceable. We use resource requests and limits in Kubernetes to ensure predictable behaviour and avoid noisy neighbours. This approach reduces manual steps and environment drift, which is central to a DevOps-friendly setup. Staging mirrors production as closely as possible so that issues are caught before they reach users.",
        images: ["/images/vpl1.png", "/images/vpl2.png"],
      },
      {
        text: "Operationally, the project emphasizes automation and reliability. Jenkins runs on every commit: build, test, container build, and push to a container registry. Kubernetes then pulls the new image and performs rolling updates with health checks and readiness probes. We use namespaces to separate environments and resource limits for fairness. Logs and metrics are centralized to support incident response and capacity planning. Rollbacks are done by redeploying a previous image or reverting a Git tag. The goal is to ship frequently with confidence, which aligns with DevOps principles of continuous delivery and infrastructure as code. Runbooks document deployment, rollback, and common operational tasks so that the team can maintain the system reliably over time.",
        images: ["/images/vpl3.png", "/images/vpl4.png"],
      },
    ],
  },
  {
    imgSrc: "/images/project-21.png",
    title: "FMS Tracking",
    tags: ["JavaScript", "PHP", "ORACLE", "Docker", "Jenkins"],
    // projectLink: "https://pixstock-official.vercel.app/",
    description:
      "FMS Tracking is a Fleet Management System that provides real-time vehicle and shipment tracking for dispatchers and clients. From a DevOps standpoint, the project is built for reliability and repeatable deployments. The application runs on Oracle for data persistence and is containerized with Docker so that the same runtime is used from development to production. Jenkins is used for CI/CD: on each code change, the pipeline runs tests, builds the Docker image, and deploys to the target environment. This eliminates manual deployment errors and ensures that every release is traceable and consistent. Infrastructure is treated as part of the delivery process: database connectivity, environment variables, and secrets are managed in a controlled way so that the application can be deployed and scaled without ad-hoc server changes. The focus is on automation, visibility, and stability in production. Database backups and connection pooling are configured with operations in mind. Health checks and logging are part of the deployment so that the team can monitor the system and react quickly to incidents. The pipeline supports multiple stages (e.g. dev, staging, prod) with appropriate gates and approvals for production, aligning with DevOps practices of continuous integration and controlled continuous delivery.",
    content: [
      {
        text: "The DevOps practices around FMS include automated testing in the pipeline, so that regressions are caught before deployment. Docker ensures that the same stack runs everywhere, reducing 'works on my machine' issues. Jenkins jobs are configured for build, test, and deploy stages, with optional manual approval for production. Logging and basic monitoring are in place to observe application behaviour and respond to issues. Oracle is used for its robustness and support for complex queries; from an ops perspective, backups and connection handling are part of the deployment and runbook documentation. The overall aim is to deliver a reliable tracking experience while keeping the release process fast and safe. Documentation covers deployment steps, rollback procedures, and how to access logs and metrics, so that the system remains maintainable and operations are repeatable.",
        images: ["/images/project-21.png"],
      },
    ],
  },
  {
    imgSrc: "/images/vplroad1.png",
    title: "VPL Tracking",
    tags: ["React", "SpringBoot", "AWS", "Jenkins", "Docker"],
    projectLink: "https://vplroad.com",
    description:
      "VPL Tracking is a logistics platform for shipment tracking and bid and lead management. DevOps is at the core of how the system is delivered and operated. The stack is React and Spring Boot, with the backend and frontend both built and deployed through a single, automated pipeline. Jenkins orchestrates the flow: code checkout, dependency resolution, unit and integration tests, Docker image build, push to a registry, and deployment to AWS. Containers run in a managed environment so that scaling and updates are handled in a predictable way. Infrastructure on AWS is used for compute, storage, and networking, with attention to security groups, IAM, and cost control. The pipeline is designed for frequent, small releases rather than big-bang deployments, which reduces risk and aligns with continuous delivery. Configuration and secrets are externalized so that the same artifact can run across environments with environment-specific settings. Database migrations, if any, are run as part of the pipeline. Monitoring and alerting are set up so that the team can detect and respond to issues quickly. The overall approach reflects DevOps values: automate everything that can be automated, keep environments consistent, and make releases predictable and reversible.",
    content: [
      {
        text: "The application provides bid management and lead tracking with role-specific UIs for dispatchers and clients. From an operational perspective, the deployment model is container-first: every component that can be containerized is, and the pipeline ensures that only tested, versioned images reach production. Jenkins stages include lint, test, build, and deploy, with the option to run smoke tests after deployment. This creates a feedback loop that keeps the system stable while allowing rapid iteration. AWS services are used for hosting, object storage for documents, and DNS via Route53, with deployment and rollback procedures documented and, where possible, automated. Runbooks describe how to deploy, roll back, and troubleshoot common scenarios, so that operations are repeatable and less error-prone.",
        images: ["/images/vplroad1.png", "/images/vplroad2.png"],
      },
      {
        text: "End-to-end, the project demonstrates a full DevOps cycle: code is committed, automatically built and tested, packaged as Docker images, and deployed to AWS. Rollbacks are performed by redeploying a previous image, and changes are tracked through version control and pipeline history. Monitoring and logging help the team understand production behaviour and resolve incidents quickly. The emphasis is on automation, consistency, and reliability—core DevOps values that make the platform maintainable and scalable for the long term. By treating infrastructure and application as code and automating the path to production, the team can deliver value frequently and with confidence.",
        images: ["/images/vplroad3.png", "/images/vplroad4.png"],
      },
    ],
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real state",
    tags: ["AWS (EC2, S3, Route53)", "Jenkins", "Kubernetes"],
    // projectLink: "https://github.com/codewithsadee-org/wealthome",
    description:
      "The Real State project is a real estate listing and property management web application with a strong DevOps-oriented infrastructure. Users browse and filter properties, view details and images, and contact agents. From an infrastructure and operations perspective, the system is designed for reliability and repeatable deployments. AWS is the primary cloud provider: EC2 instances (or containerized workloads) host the application, S3 stores property images and static assets with appropriate lifecycle and access policies, and Route53 manages DNS for consistent and configurable routing. Jenkins is used for CI/CD: every change triggers a pipeline that runs tests, builds artifacts (or Docker images), and deploys to the target environment. Kubernetes is used for container orchestration where applicable, providing rolling updates, health checks, and scaling. The goal is to treat infrastructure and application delivery as a single, automated process—infrastructure as code and continuous delivery in practice. Configuration, secrets, and environment-specific values are managed so that the same build can be promoted across dev, staging, and production with minimal manual intervention.",
    content: [
      {
        text: "Deployment and operations follow DevOps best practices: version-controlled code, automated testing in the pipeline, containerized runtimes where it makes sense, and orchestration for consistent scaling and updates. Monitoring and logging are considered part of the delivery so that the team can observe the application in production and respond to issues. The combination of AWS, Jenkins, and Kubernetes provides a solid foundation for a reliable, scalable real estate platform that can be updated frequently and safely.",
        images: ["/images/project-4.jpg"],
      },
    ],
  },
  {
    imgSrc: "/images/project-1.png",
    title: "Fixaroo",
    tags: ["React", "SpringBoot", "AWS", "Jenkins", "Docker"],
    // projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
    description:
      "Fixaroo is an e-service and repair booking platform where users request services, choose time slots, and track orders. The project is built with a DevOps-first mindset: the React frontend and Spring Boot backend are delivered through an automated pipeline so that releases are consistent and low-risk. Jenkins is the CI/CD engine: it runs on code changes, executes unit and integration tests, builds Docker images for the backend (and optionally the frontend), and deploys to AWS. Docker ensures that the same runtime is used in every environment, eliminating drift and simplifying troubleshooting. AWS hosts the application and related services, with attention to security, scaling, and cost. The pipeline is designed for continuous delivery: small, frequent releases with automated tests and clear rollback paths. Configuration and secrets are externalized so that the same artifact can run in dev, staging, and production. The focus is on automation, reliability, and the ability to ship changes quickly while keeping the system stable—core DevOps objectives that make the platform maintainable and scalable.",
    content: [
      {
        text: "From an operational standpoint, Fixaroo uses standard DevOps practices: infrastructure and application changes are version-controlled, the build and test cycle is fully automated, and deployment is repeatable and traceable. Monitoring and logging support production observability, and runbooks document common operations and incident response. The combination of React, Spring Boot, Jenkins, Docker, and AWS provides a modern, automated delivery pipeline that aligns with DevOps principles of collaboration, automation, and continuous improvement.",
        images: ["/images/project-1.png"],
      },
    ],
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["AWS", "GitLab", "Jenkins", "Docker", "Linux"],
    // projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
    description:
      "The vCard Personal Portfolio is a dark-themed portfolio template that doubles as a practical showcase of DevOps practices. The site includes sections for intro, projects, skills, and contact. From a DevOps perspective, the project demonstrates end-to-end automation: source code is managed in Git (GitLab), GitLab CI runs pipelines on push (lint, test, build), and Jenkins can be used for additional build and test stages or for deployment orchestration. The application is containerized with Docker so that it runs identically in development and production. Deployment targets AWS or a Linux server, with the option to use managed services or self-hosted runners. The pipeline emphasizes repeatability: the same Docker image is built once and promoted through environments, and configuration is injected at deploy time. Monitoring and basic health checks can be added to observe the live site. The project illustrates how even a static or front-end-heavy site can benefit from DevOps—version control, CI/CD, containerization, and automated deployment—making it production-ready and easy to maintain and update over time.",
    content: [
      {
        text: "Operationally, the portfolio project uses GitLab for version control and CI, Jenkins for build and deployment automation, Docker for consistent runtimes, and AWS or Linux for hosting. The result is a clear, automated path from code change to production, with traceability and the ability to roll back if needed. This aligns with DevOps values: automation, consistency, and a focus on delivering value through a reliable, repeatable process.",
        images: ["/images/project-6.jpg"],
      },
    ],
  },
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="work" className="section section-line">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          Projects — DevOps & Full Stack
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((project) => (
            <ProjectCard
              key={project.title}
              imgSrc={project.imgSrc}
              title={project.title}
              tags={project.tags}
              projectLink={project.projectLink}
              classes="reveal-up"
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project detail modal — larger, with multiple content blocks */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-hidden"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="relative w-full max-w-4xl h-[92vh] max-h-[92vh] flex flex-col rounded-2xl bg-zinc-900 ring-1 ring-zinc-600/80 shadow-2xl shadow-black/50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 z-20 w-11 h-11 rounded-xl bg-zinc-800 hover:bg-zinc-700 ring-1 ring-zinc-600 flex items-center justify-center transition-all hover:scale-105"
              aria-label="Close"
            >
              <span className="material-symbols-rounded text-zinc-300 text-xl">close</span>
            </button>
            <div className="overflow-y-auto overflow-x-hidden flex-1 min-h-0 scrollbar-thin overscroll-contain">
            {/* Hero image */}
            <figure className="relative w-full aspect-[21/9] min-h-[200px] overflow-hidden rounded-t-2xl bg-zinc-800">
              <img
                src={selectedProject.imgSrc}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent pointer-events-none" />
            </figure>

            <div className="px-6 sm:px-8 lg:px-10 pt-6 pb-8">
              {/* Title & tags */}
              <div className="mb-6">
                <h3
                  id="project-modal-title"
                  className="headline-2 text-2xl sm:text-3xl lg:text-4xl mb-3"
                >
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs sm:text-sm text-sky-300/90 bg-sky-400/10 ring-1 ring-sky-400/20 px-3 py-1.5 rounded-lg font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Short description */}
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
                {selectedProject.description}
              </p>

              {/* Content blocks: text + images alternating */}
              {selectedProject.content && selectedProject.content.length > 0 && (
                <div className="space-y-10 mb-8">
                  {selectedProject.content.map((block, i) => (
                    <div key={i} className="space-y-4">
                      {block.text && (
                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                          {block.text}
                        </p>
                      )}
                      {block.images && block.images.length > 0 && (
                        <div
                          className={
                            block.images.length === 1
                              ? "w-full"
                              : "grid grid-cols-1 sm:grid-cols-2 gap-3"
                          }
                        >
                          {block.images.map((src, j) => (
                            <figure
                              key={j}
                              className="rounded-xl overflow-hidden ring-1 ring-zinc-600/50 bg-zinc-800"
                            >
                              <img
                                src={src}
                                alt={`${selectedProject.title} screenshot ${j + 1}`}
                                className="w-full h-auto object-cover max-h-72"
                              />
                            </figure>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Visit project link */}
              {selectedProject.projectLink && (
                <div className="pt-4 border-t border-zinc-700/80">
                  <a
                    href={selectedProject.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px]"
                  >
                    Visit project
                    <span className="material-symbols-rounded text-[18px]">arrow_outward</span>
                  </a>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
