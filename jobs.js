const jobsData = [
  {
    title: "Deputy Director (Audit, IT, Software Dev)",
    department: "Punjab Education Foundation (PEF via CTS)",
    location: "Lahore, Punjab",
    type: "Full-time",
    qualification: "Master's / BS in CS / IT / CA / ACCA",
    description: "Punjab Education Foundation (PEF) invites applications for Deputy Director positions in Audit, IT, and Software Development. Apply online via CTS.",
    deadline: "2026-09-17",
    link: "https://pef.edu.pk/",
    logo_class: "bg-green",
    icon: "ph-buildings"
  },
  {
    title: "Senior Assistant (BS-15) & Sub Assistant (BS-11)",
    department: "Election Commission of Pakistan (ECP)",
    location: "Islamabad / All Pakistan",
    type: "Full-time (BS-15 / BS-11)",
    qualification: "Graduation / Intermediate",
    description: "ECP invites online applications for Senior Assistant (BS-15) and Sub Assistant (BS-11) through ECP Online Recruitment System (ORS).",
    deadline: "2026-09-17",
    link: "https://jobs.ecp.gov.pk/",
    logo_class: "bg-blue",
    icon: "ph-shield-check"
  },
  {
    title: "Assistant Director & Senior / Junior Assistants",
    department: "National Testing Service (NTS)",
    location: "Islamabad (Head Office)",
    type: "Full-time",
    qualification: "Master's / Bachelor's",
    description: "Career opportunities at NTS Head Office Islamabad for Assistant Director, Senior Assistant, and Junior Assistant. Apply online via NTS official website.",
    deadline: "2026-09-16",
    link: "https://www.nts.org.pk/",
    logo_class: "bg-purple",
    icon: "ph-users"
  },
  {
    title: "Digital Banking Officer, Teller & Relationship Manager",
    department: "National Bank of Pakistan (NBP)",
    location: "Across Pakistan",
    type: "Full-time",
    qualification: "Graduation / Master's (Commerce / IT / Business)",
    description: "National Bank of Pakistan (NBP) is hiring dynamic candidates for Digital Banking Officers, Tellers, Processing Officers, and Branch Managers.",
    deadline: "2026-09-18",
    link: "https://www.nbp.com.pk/",
    logo_class: "bg-green",
    icon: "ph-bank"
  },
  {
    title: "Teaching & Non-Teaching Posts (35+ Vacancies)",
    department: "University of Engineering & Technology (UET) Lahore",
    location: "Lahore",
    type: "Full-time",
    qualification: "Ph.D / MS / Relevant Degree",
    description: "UET Lahore invites applications for multiple faculty and administrative vacancies across university faculties and departments.",
    deadline: "2026-09-14",
    link: "https://uet.edu.pk/",
    logo_class: "bg-purple",
    icon: "ph-student"
  },
  {
    title: "Management Trainee Officers (MTOs) & Managers",
    department: "National Insurance Company Limited (NICL)",
    location: "Karachi / Pakistan",
    type: "Full-time",
    qualification: "Master's / Bachelor's (16 yrs)",
    description: "NICL is hiring 15 MTOs and various Management positions including HR, Audit, Takaful, Admin. Apply via NJP / OTS portal.",
    deadline: "2026-09-11",
    link: "https://njp.gov.pk/",
    logo_class: "bg-blue",
    icon: "ph-briefcase"
  },
  {
    title: "Various Vacancies (IT, Ops, Finance, Admin)",
    department: "Sindh Social Protection Authority (via NTS)",
    location: "Sindh",
    type: "Contract",
    qualification: "Primary to Master's",
    description: "149 vacancies under World Bank-assisted project 'Strengthening Social Protection Delivery System in Sindh'. Roles in IT, operations, finance, admin, etc.",
    deadline: '2026-09-10',
    link: 'https://www.nts.org.pk/',
    logo_class: 'bg-green',
    icon: 'ph-users'
  },
  {
    title: 'Professor, Assistant Professor & Lecturer',
    department: 'Kohsar University, Murree',
    location: 'Murree',
    type: 'Full-time',
    qualification: 'Ph.D / MS / M.Phil',
    description: 'Kohsar University Murree is hiring faculty members across various disciplines. Excellent opportunity for academic professionals in a scenic location.',
    deadline: '2026-09-10',
    link: 'https://kum.edu.pk/',
    logo_class: 'bg-purple',
    icon: 'ph-student'
  },
  {
    title: 'Various Vacancies (Public Sector)',
    department: 'Government of Sindh (via OTS)',
    location: 'Sindh',
    type: 'Full-time',
    qualification: 'Public Sector',
    description: 'New recruitment project announced on 30 August 2026 for a public sector entity in the Government of Sindh. Testing and processing by OTS.',
    deadline: '2026-09-15',
    link: 'https://ots.org.pk/',
    logo_class: 'bg-blue',
    icon: 'ph-buildings'
  },
  {
    title: 'Teaching & Non-Teaching Posts',
    department: 'Emerson University, Multan',
    location: 'Multan',
    type: 'Full-time',
    qualification: 'Relevant Degree',
    description: 'Career opportunities for Professors, Directors, Engineers, IT Staff, and Admin personnel.',
    deadline: '2026-09-20',
    link: 'https://eum.edu.pk/',
    logo_class: 'bg-purple',
    icon: 'ph-student'
  },
  {
    title: 'Executive & Academic Admin',
    department: 'Superior College Mian Channu',
    location: 'Mian Channu',
    type: 'Full-time',
    qualification: 'Admin / HR',
    description: 'Hiring Admin Manager, HR Manager, PA to Principal, and Campus Head. Free accommodation provided.',
    deadline: '2026-09-15',
    link: 'https://www.superior.edu.pk/',
    logo_class: 'bg-green',
    icon: 'ph-buildings'
  },
  {
    title: 'Academic Coordinator / Admin',
    department: 'Cadet College Khanpur',
    location: 'Rahim Yar Khan',
    type: 'Full-time',
    qualification: 'Master\'s',
    description: 'Hiring HOD / DOS / Academic Coordinator. 10-15 years experience required. Preference to retired Pak Navy officers.',
    deadline: '2026-09-10',
    link: 'https://cck.edu.pk/',
    logo_class: 'bg-blue',
    icon: 'ph-shield-check'
  },
  {
    title: 'Various Vacancies (Medical & Admin)',
    department: 'Maryam Nawaz Sharif Medical College (via NTS)',
    location: 'Mianwali, Punjab',
    type: 'Full-time',
    qualification: 'Medical & Health',
    description: 'New recruitment for Maryam Nawaz Sharif Medical College, Mianwali being conducted through NTS.',
    deadline: '2026-08-27',
    link: 'https://www.nts.org.pk/',
    logo_class: 'bg-green',
    icon: 'ph-first-aid-kit'
  },
  {
    title: 'Computer Operator (BS-16)',
    department: 'Federal Public Service Commission (FPSC)',
    location: 'Federal / All Pakistan',
    type: 'Full-time (BS-16)',
    qualification: 'BCS / BIT / MIT',
    description: 'Announced under FPSC Consolidated Advt No. 03/2026. Hiring Computer Operators for Federal Government Ministries.',
    deadline: '2026-08-31',
    link: 'https://fpsc.gov.pk/',
    logo_class: 'bg-blue',
    icon: 'ph-desktop'
  },
  {
    title: 'Secondary School Teacher (BS-17)',
    department: 'Federal Public Service Commission (FPSC)',
    location: 'Federal / All Pakistan',
    type: 'Full-time (BS-17)',
    qualification: 'Masters / B.Ed',
    description: 'Part of FPSC Consolidated Advt No. 03/2026. Required to teach secondary classes in federal educational institutions.',
    deadline: '2026-08-31',
    link: 'https://fpsc.gov.pk/',
    logo_class: 'bg-blue',
    icon: 'ph-chalkboard-teacher'
  },
  {
    title: 'Charge Nurse (BS-16)',
    department: 'Federal Public Service Commission (FPSC)',
    location: 'Federal Hospitals',
    type: 'Full-time (BS-16)',
    qualification: 'BSc Nursing / Diploma',
    description: 'Part of FPSC Consolidated Advt No. 03/2026. Required for Federal Government Polyclinic and other federal hospitals.',
    deadline: '2026-08-31',
    link: 'https://fpsc.gov.pk/',
    logo_class: 'bg-green',
    icon: 'ph-first-aid'
  },
  {
    title: 'Water Management Officer (BS-17)',
    department: 'Punjab Public Service Commission (PPSC)',
    location: 'Punjab (Agriculture Dept)',
    type: 'Full-time (BS-17)',
    qualification: 'BSc / MSc Engineering',
    description: 'Announced in PPSC Advt No. 08/2026. Looking for engineers to manage provincial water resources and agriculture projects.',
    deadline: '2026-09-03',
    link: 'https://www.ppsc.gop.pk/',
    logo_class: 'bg-blue',
    icon: 'ph-drop'
  },
  {
    title: 'Transport Sub Inspector (BS-14)',
    department: 'Punjab Public Service Commission (PPSC)',
    location: 'Punjab (Transport Dept)',
    type: 'Full-time (BS-14)',
    qualification: 'Graduation',
    description: 'Announced in PPSC Advt No. 08/2026. Sub Inspectors required for field duties in the Transport Department.',
    deadline: '2026-09-03',
    link: 'https://www.ppsc.gop.pk/',
    logo_class: 'bg-green',
    icon: 'ph-car'
  },
  {
    title: 'Data Entry Operator',
    department: 'Punjab Information Technology Board (PITB)',
    location: 'Lahore',
    type: 'Contract',
    qualification: 'Intermediate / ICS',
    description: 'PITB requires Data Entry Operators for short-term project deployment across Punjab.',
    deadline: '2026-08-15',
    link: 'https://jobs.punjab.gov.pk/',
    logo_class: 'bg-blue',
    icon: 'ph-keyboard'
  },
  {
    title: 'Junior Clerk (BS-11)',
    department: 'Board of Revenue Punjab',
    location: 'Punjab',
    type: 'Full-time',
    qualification: 'Intermediate',
    description: 'Hiring of Junior Clerks via PPSC. Minimum typing speed of 25 WPM required.',
    deadline: '2026-08-10',
    link: 'https://www.ppsc.gop.pk/',
    logo_class: 'bg-purple',
    icon: 'ph-file-text'
  },
  {
    title: 'Medical Officer (BS-17)',
    department: 'Primary & Secondary Healthcare',
    location: 'Punjab',
    type: 'Full-time',
    qualification: 'MBBS',
    description: 'Recruitment of Medical Officers on adhoc basis for BHUs and RHCs across Punjab.',
    deadline: '2026-08-05',
    link: 'https://pshealthpunjab.gov.pk/',
    logo_class: 'bg-green',
    icon: 'ph-stethoscope'
  }
];

const jobsPerPage = 10;
let currentPage = 1;

function renderJobs() {
    const container = document.getElementById("job-cards-container");
    const paginationControls = document.getElementById("pagination-controls");
    if (!container || !paginationControls) return;
    
    // Sort jobs: active first, expired later
    const today = new Date();
    today.setHours(0,0,0,0);
    
    const sortedJobs = [...jobsData].sort((a, b) => {
        const dateA = new Date(a.deadline);
        const dateB = new Date(b.deadline);
        const isAExpired = dateA < today;
        const isBExpired = dateB < today;
        
        if (isAExpired && !isBExpired) return 1;
        if (!isAExpired && isBExpired) return -1;
        return dateB - dateA; 
    });

    const totalPages = Math.ceil(sortedJobs.length / jobsPerPage);
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    const currentJobs = sortedJobs.slice(startIndex, endIndex);

    container.innerHTML = "";

    currentJobs.forEach(job => {
        const jobDate = new Date(job.deadline);
        const isExpired = jobDate < today;
        const dateStr = jobDate.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
        
        const statusHtml = isExpired 
            ? '<span class="posted-time" style="color: #64748B; font-weight: bold;">Expired: ' + dateStr + '</span>'
            : '<span class="posted-time" style="color: #ff5722; font-weight: bold;">Last Date: ' + dateStr + '</span>';

        const applyBtn = isExpired 
            ? '<span class="btn-secondary" style="display:inline-block; text-align:center; background-color: #CBD5E1; color: #475569; cursor: not-allowed;">Closed</span>'
            : '<a href="' + job.link + '" target="_blank" class="btn-secondary" style="display:inline-block; text-align:center;">Apply Now</a>';

        const bgClass = isExpired ? "bg-gray" : job.logo_class;
        const titleStyle = isExpired ? "color: #94A3B8;" : "";

        const cardHtml = '<div class="job-card ' + (isExpired ? 'expired-card' : '') + '">' +
            '<div class="job-card-header">' +
                '<div class="company-logo ' + bgClass + '">' +
                    '<i class="ph ' + job.icon + '"></i>' +
                '</div>' +
                '<div class="job-meta">' +
                    '<h3 style="' + titleStyle + '">' + job.title + '</h3>' +
                    '<span class="department">' + job.department + '</span>' +
                '</div>' +
            '</div>' +
            '<div class="job-details">' +
                '<div class="detail-item"><i class="ph ph-map-pin"></i> ' + job.location + '</div>' +
                '<div class="detail-item"><i class="ph ph-clock"></i> ' + job.type + '</div>' +
                '<div class="detail-item"><i class="ph ph-graduation-cap"></i> ' + job.qualification + '</div>' +
            '</div>' +
            '<p class="job-description" style="' + titleStyle + '">' + job.description + '</p>' +
            '<div class="job-card-footer">' +
                statusHtml +
                applyBtn +
            '</div>' +
        '</div>';
        container.innerHTML += cardHtml;
    });

    let paginationHtml = '<div style="display: flex; gap: 10px; justify-content: center; margin-top: 30px; margin-bottom: 20px;">';
    
    if (currentPage > 1) {
        paginationHtml += '<button onclick="changePage(' + (currentPage - 1) + ')" class="btn-primary" style="padding: 8px 16px;">Previous</button>';
    }
    
    for (let i = 1; i <= totalPages; i++) {
        const activeStyle = i === currentPage ? "background-color: var(--color-accent);" : "background-color: var(--color-border); color: var(--color-text-main);";
        paginationHtml += '<button onclick="changePage(' + i + ')" class="btn-primary" style="padding: 8px 16px; ' + activeStyle + '">' + i + '</button>';
    }

    if (currentPage < totalPages) {
        paginationHtml += '<button onclick="changePage(' + (currentPage + 1) + ')" class="btn-primary" style="padding: 8px 16px;">Next</button>';
    }
    
    paginationHtml += '</div>';
    paginationControls.innerHTML = paginationHtml;
}

window.changePage = function(page) {
    currentPage = page;
    renderJobs();
    document.querySelector(".job-listings").scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", renderJobs);
