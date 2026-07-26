import { Header } from '../components/Header.jsx'

const projects = [
    {
        title: 'Bioethics',
        description: 'An academic study focused on evaluating movement patterns, decision-making, and performance consistency across repeated sessions.',
        date: 'March 2025',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        title: 'Health Tech Challenge 2027',
        description: 'An academic study focused on evaluating movement patterns, decision-making, and performance consistency across repeated sessions.',
        date: 'March 2025',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    

]

export function Projects() {
    return (
        <>
            <title>Projects</title>
            <Header />
            <div className="min-h-screen bg-slate-900 px-2 py-4 text-white">
                <div className="mx-auto max-w-3xl">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-3 md:grid-cols-2">
                        {projects.map((project, index) => (
                            <div
                                key={project.title}
                                className="overflow-hidden rounded-[16px] border border-cyan-100 bg-slate-50 p-2 text-slate-800 shadow-sm shadow-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-24 w-full rounded-[10px] object-cover"
                                />
                                <div className="p-1">
                                    <div className="mb-1 flex items-center justify-between">
                                        <span className="rounded-full bg-cyan-700 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.2em] text-white">
                                            Project {index + 1}
                                        </span>
                                        <span className="text-[9px] font-medium text-slate-500">{project.readTime}</span>
                                    </div>
                                    <h2 className="text-base font-semibold text-slate-900">{project.title}</h2>
                                    <p className="mt-0.5 text-[11px] leading-4 text-slate-600">{project.description}</p>
                                    <div className="mt-1.5 flex items-center justify-between border-t border-slate-200 pt-1 text-[9px] text-slate-500">
                                        <span>Completed {project.date}</span>
                                        <span className="font-semibold text-cyan-700">View details</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
