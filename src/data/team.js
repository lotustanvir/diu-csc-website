// DIU Cyber Security Centre — Team Data
// Replace remaining placeholder entries with the official roster supplied by
// the project owner. To add a member, append one object to this array.
// When an official photo is available, set `image` (rendered with lazy loading
// and alt text); keep it `null` to show the initials avatar.
// `social` accepts { label: 'linkedin' | 'github' | 'website' | 'email', url: '...' }.
// `roleDescription` and `experience` are the full-text sections shown on the
// member's profile page (/team/:id). `experience` may be a plain string or an
// array of { title, text } entries rendered as titled bullets.

export const teamMembers = [
  {
    id: 'imran-mahmud',
    name: 'Dr. Imran Mahmud',
    role: 'Professor & Head, Department of Software Engineering; Executive Advisor / Lead, DIU Cybersecurity Center',
    roleDescription:
      'Strategic leadership, institutional governance, oversight of cybersecurity research initiatives, industry partnership setup, and integration of security protocols into academic curricula.',
    experience:
      'Extensive academic and research leadership spanning over 10 years in software engineering and security systems. Specialized in Information Security Management Systems (ISMS), human factors in cybersecurity, secure software development life cycle (SSDLC), and directing university-wide research projects on emerging cyber threats.',
    expertise:
      'ISMS, human factors in cybersecurity, secure SDLC, and university-wide research on emerging cyber threats.',
    image: '/Dr_Imran_Mahmud.jpg',
    initials: 'IM',
    gradient: 'from-cyber-400 to-electric-500',
    social: [],
  },
  {
    id: 'rubaiyat-islam',
    name: 'Dr. Rubaiyat Islam',
    role: 'Associate Professor & Senior Cybersecurity Researcher, DIU Cybersecurity Center',
    roleDescription:
      'Lead Academic Researcher, thesis advisor for cybersecurity undergraduate/postgraduate projects, and lead trainer in advanced threat modeling and cryptography.',
    experience:
      'Deep background in network security, intrusion detection systems (IDS), cloud infrastructure security, and machine learning applications in threat intelligence. Published peer-reviewed research papers on AI-driven cyber defense and secure protocol architectures.',
    expertise:
      'Network security, intrusion detection systems, cloud infrastructure security, and ML-based threat intelligence.',
    image: '/Dr_Rubaiyet_sir.jpg',
    initials: 'RI',
    gradient: 'from-violet-400 to-fuchsia-500',
    social: [],
  },
  {
    id: 'rebel-monwar',
    name: 'Md. Monowarul Islam Rebel (Rebel Monwar)',
    role: 'Director of Marketing and Sales (Daffodil Family) / Former Cyber Security Business Entrepreneur',
    roleDescription:
      'Strategic leader overseeing specialized digital business portfolios, corporate tech integrations, and executive governance for multi-sector IT enterprises.',
    experience: [
      {
        title: 'Strategic Management',
        text: 'Oversaw and scaled corporate operations for Dolphin Cyber Security Solution, a dedicated protection wing under the Daffodil Family umbrella.',
      },
      {
        title: 'Academic Background',
        text: 'Expanded his technical competencies by pursuing specialized diploma credentials focused in Computer and Cyber Security.',
      },
      {
        title: 'National Recognition',
        text: 'Formally recognized and awarded by the ICT Minister of Bangladesh for his entrepreneurial initiatives and commercial contributions to building regional cybersecurity defenses.',
      },
    ],
    expertise:
      'Strategic management of cyber security enterprises, corporate tech integrations, and digital business portfolios.',
    image: '/Rebel_sir.jpeg',
    initials: 'RM',
    gradient: 'from-amber-400 to-red-500',
    social: [],
  },
  {
    id: 'sheikh-tonmoy',
    name: 'Sheikh Tonmoy',
    role: 'Lecturer, Department of Software Engineering & Assistant Director / Program Coordinator, DIU Cybersecurity Center',
    roleDescription:
      'Operational management, lab supervision, organizing Capture The Flag (CTF) competitions, delivering practical bootcamps (Ethical Hacking, SOC operations), and mentoring student security labs.',
    experience:
      'Practical expertise in Vulnerability Assessment and Penetration Testing (VAPT), offensive security techniques, web application security, and security automation. Active mentor for national cybersecurity grant research and student security teams.',
    expertise:
      'VAPT, offensive security techniques, web application security, and security automation.',
    image: '/sheikh_tonmoy_sir.jpeg',
    initials: 'ST',
    gradient: 'from-emerald-400 to-teal-500',
    social: [],
  },
  {
    id: 'member-05',
    name: 'Member 05',
    role: 'Designation / Role',
    roleDescription: null,
    experience: null,
    expertise: 'Short specialization',
    image: null,
    initials: 'M5',
    gradient: 'from-electric-500 to-violet-500',
    social: [],
  },
  {
    id: 'member-06',
    name: 'Member 06',
    role: 'Designation / Role',
    roleDescription: null,
    experience: null,
    expertise: 'Short specialization',
    image: null,
    initials: 'M6',
    gradient: 'from-cyan-400 to-blue-500',
    social: [],
  },
  {
    id: 'member-07',
    name: 'Member 07',
    role: 'Designation / Role',
    roleDescription: null,
    experience: null,
    expertise: 'Short specialization',
    image: null,
    initials: 'M7',
    gradient: 'from-fuchsia-400 to-pink-500',
    social: [],
  },
  {
    id: 'member-08',
    name: 'Member 08',
    role: 'Designation / Role',
    roleDescription: null,
    experience: null,
    expertise: 'Short specialization',
    image: null,
    initials: 'M8',
    gradient: 'from-lime-400 to-emerald-500',
    social: [],
  },
]

export function getTeamMember(id) {
  return teamMembers.find((member) => member.id === id)
}
