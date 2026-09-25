export default function SectionHeader({eyebrow,title,description,action}){
 return <div className="section-header"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1>{description&&<p>{description}</p>}</div>{action}</div>
}
