function SkillCard({ title, emoji}) {
    return(
        <div className="skill-card">
            <span>{emoji}</span>
            <h3>{title}</h3>

        </div>
    );
}
function App(){
    return(
       <div className="container">
            <SkillCard title="JavaScript" emoji="🟨" />
            <SkillCard title="React" emoji="⚛️" />
            <SkillCard title="CSS" emoji="🎨" />
        </div>  
    );
}
export default SkillCard;
export {App};