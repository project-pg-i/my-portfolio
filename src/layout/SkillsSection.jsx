export default function SkillsSection() {
  return (
    <div className="absolute top-[100vh] left-0 w-full h-screen bg-[#0f172a] flex items-center px-20">
      <div className="w-1/2 text-white space-y-4">
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        {[
          { name: 'HTML', value: 90 },
          { name: 'React', value: 80 },
          { name: 'Node.js', value: 75 },
        ].map((skill) => (
          <div key={skill.name}>
            <p>{skill.name}</p>
            <div className="bg-gray-700 h-2 w-full rounded-full">
              <div
                className="bg-accent h-2 rounded-full"
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
