import { College } from '../types/college';

export const colleges: College[] = [
  {
    id: '1',
    name: 'Indian Institute of Science (IISc)',
    location: 'Malleswaram, Bangalore',
    city: 'Bangalore',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviews: 2547,
    fees: { min: 200000, max: 500000 },
    courses: ['PhD', 'M.Tech', 'M.Sc', 'Integrated PhD', 'B.Sc Research'],
    established: 1909,
    type: 'Science',
    mode: 'Full-time',
    accreditation: ['NAAC A++', 'UGC', 'NIRF Rank 1'],
    highlights: ['Research Excellence', 'Top Faculty', 'Innovation Hub', 'Global Recognition'],
    description: 'Premier research institution known for excellence in science and engineering research. IISc is consistently ranked as the top university in India and offers world-class research opportunities across various disciplines.'
  },
  {
    id: '2',
    name: 'Indian Institute of Technology Delhi',
    location: 'Hauz Khas, New Delhi',
    city: 'Delhi',
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    reviews: 3421,
    fees: { min: 250000, max: 400000 },
    courses: ['B.Tech', 'M.Tech', 'PhD', 'MBA', 'M.Sc', 'Dual Degree'],
    established: 1961,
    type: 'Engineering',
    mode: 'Full-time',
    accreditation: ['NAAC A++', 'NBA', 'UGC', 'NIRF Rank 2'],
    highlights: ['IIT Brand', 'Excellent Placement', 'Research Focus', 'Alumni Network'],
    description: 'One of the premier engineering institutions in India with world-class facilities. IIT Delhi is known for its rigorous academic programs, cutting-edge research, and exceptional placement records.'
  },
  {
    id: '3',
    name: 'Indian Institute of Management Bangalore',
    location: 'Bannerghatta Road, Bangalore',
    city: 'Bangalore',
    image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    reviews: 1876,
    fees: { min: 2400000, max: 2400000 },
    courses: ['MBA', 'PGDM', 'Executive MBA', 'PhD', 'Executive Education'],
    established: 1973,
    type: 'Management',
    mode: 'Full-time',
    accreditation: ['AACSB', 'EQUIS', 'AMBA', 'NIRF Rank 3'],
    highlights: ['Top Business School', 'Industry Connect', 'Global Recognition', 'High ROI'],
    description: 'Leading business school known for management education and corporate leadership development. IIM Bangalore consistently ranks among the top business schools globally.'
  },
  {
    id: '4',
    name: 'All India Institute of Medical Sciences Delhi',
    location: 'Ansari Nagar, New Delhi',
    city: 'Delhi',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    reviews: 4231,
    fees: { min: 50000, max: 150000 },
    courses: ['MBBS', 'MD', 'MS', 'DM', 'MCh', 'B.Sc Nursing', 'PhD'],
    established: 1956,
    type: 'Medical',
    mode: 'Full-time',
    accreditation: ['MCI', 'NAAC A++', 'NIRF Rank 1 Medical'],
    highlights: ['Medical Excellence', 'Research Leader', 'Top Hospital', 'Affordable Fees'],
    description: 'Premier medical institution known for excellence in medical education and healthcare. AIIMS Delhi is the most prestigious medical college in India with world-class facilities.'
  },
  // Additional colleges from the provided list
  {
    id: '60445',
    name: 'Bengaluru City University',
    location: 'Bangalore',
    city: 'Bangalore',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 3.8,
    reviews: 1245,
    fees: { min: 50000, max: 200000 },
    courses: ['B.A.', 'B.Com', 'B.Sc', 'M.A.', 'M.Com', 'M.Sc', 'PhD'],
    established: 2017,
    type: 'Arts',
    mode: 'Full-time',
    accreditation: ['UGC', 'NAAC B+'],
    highlights: ['Diverse Programs', 'Affordable Education', 'Modern Campus', 'Industry Connect'],
    description: 'State university offering diverse undergraduate and postgraduate programs with focus on quality education and research.'
  },
  {
    id: '121314',
    name: "St. Stephen's College Delhi",
    location: 'University Enclave, Delhi',
    city: 'Delhi',
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.5,
    reviews: 2156,
    fees: { min: 40000, max: 80000 },
    courses: ['B.A.', 'B.Sc', 'M.A.', 'M.Sc'],
    established: 1881,
    type: 'Arts',
    mode: 'Full-time',
    accreditation: ['NAAC A++', 'UGC', 'DU Affiliated'],
    highlights: ['Historic Legacy', 'Academic Excellence', 'Alumni Network', 'Liberal Arts'],
    description: 'One of the most prestigious colleges of Delhi University known for academic excellence and distinguished alumni.'
  },
  {
    id: '151617',
    name: 'Federal Institute of Technology Bangalore',
    location: 'Electronic City, Bangalore',
    city: 'Bangalore',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.2,
    reviews: 1567,
    fees: { min: 180000, max: 300000 },
    courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA'],
    established: 2010,
    type: 'Engineering',
    mode: 'Full-time',
    accreditation: ['AICTE', 'NBA', 'VTU Affiliated'],
    highlights: ['Modern Infrastructure', 'Industry Partnerships', 'Placement Support', 'Research Focus'],
    description: 'Modern engineering institute with state-of-the-art facilities and strong industry connections.'
  },
  {
    id: '212223',
    name: 'Jesus and Mary College Delhi',
    location: 'Chanakyapuri, New Delhi',
    city: 'Delhi',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.3,
    reviews: 1834,
    fees: { min: 35000, max: 75000 },
    courses: ['B.A.', 'B.Com', 'B.Sc', 'M.A.', 'M.Com'],
    established: 1968,
    type: 'Arts',
    mode: 'Full-time',
    accreditation: ['NAAC A+', 'UGC', 'DU Affiliated'],
    highlights: ['Women Empowerment', 'Quality Education', 'Cultural Activities', 'Social Service'],
    description: 'Premier women\'s college known for holistic education and women empowerment initiatives.'
  },
  {
    id: '272829',
    name: 'Indraprastha Institute of Information Technology Delhi',
    location: 'Okhla, New Delhi',
    city: 'Delhi',
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.4,
    reviews: 2234,
    fees: { min: 300000, max: 500000 },
    courses: ['B.Tech', 'M.Tech', 'PhD', 'MBA'],
    established: 2008,
    type: 'Engineering',
    mode: 'Full-time',
    accreditation: ['UGC', 'NAAC A+', 'NBA'],
    highlights: ['IT Focus', 'Research Excellence', 'Industry Connect', 'Innovation Hub'],
    description: 'State university focused on information technology and computer science education with strong research programs.'
  },
  {
    id: '303132',
    name: 'Manipal Institute of Technology',
    location: 'Manipal, Karnataka (Bangalore Campus)',
    city: 'Bangalore',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.1,
    reviews: 3456,
    fees: { min: 250000, max: 400000 },
    courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA', 'B.Arch'],
    established: 1957,
    type: 'Engineering',
    mode: 'Full-time',
    accreditation: ['NAAC A+', 'NBA', 'UGC'],
    highlights: ['Brand Recognition', 'Global Exposure', 'Industry Partnerships', 'Research Focus'],
    description: 'Well-established private engineering institute with strong industry connections and global recognition.'
  },
  {
    id: '333435',
    name: 'Bangalore Medical College',
    location: 'Fort, Bangalore',
    city: 'Bangalore',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.0,
    reviews: 2876,
    fees: { min: 80000, max: 150000 },
    courses: ['MBBS', 'MD', 'MS', 'Diploma', 'B.Sc Nursing'],
    established: 1955,
    type: 'Medical',
    mode: 'Full-time',
    accreditation: ['MCI', 'NAAC A', 'UGC'],
    highlights: ['Government College', 'Affordable Fees', 'Clinical Training', 'Research Opportunities'],
    description: 'Government medical college with excellent clinical training facilities and affordable medical education.'
  },
  {
    id: '363738',
    name: 'Delhi College of Arts and Commerce',
    location: 'Netaji Nagar, Delhi',
    city: 'Delhi',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 3.9,
    reviews: 1567,
    fees: { min: 25000, max: 60000 },
    courses: ['B.A.', 'B.Com', 'M.A.', 'M.Com'],
    established: 1987,
    type: 'Commerce',
    mode: 'Full-time',
    accreditation: ['NAAC B++', 'UGC', 'DU Affiliated'],
    highlights: ['Commerce Focus', 'Affordable Education', 'Industry Exposure', 'Skill Development'],
    description: 'Delhi University affiliated college specializing in commerce and arts education with industry focus.'
  },
  {
    id: '454647',
    name: 'Hansraj College Delhi',
    location: 'Malka Ganj, Delhi',
    city: 'Delhi',
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.4,
    reviews: 2345,
    fees: { min: 30000, max: 70000 },
    courses: ['B.A.', 'B.Sc', 'B.Com', 'M.A.', 'M.Sc'],
    established: 1948,
    type: 'Science',
    mode: 'Full-time',
    accreditation: ['NAAC A++', 'UGC', 'DU Affiliated'],
    highlights: ['Science Excellence', 'Research Culture', 'Alumni Network', 'Academic Rigor'],
    description: 'Premier science college of Delhi University known for academic excellence and research contributions.'
  },
  {
    id: '515253',
    name: 'Miranda House Delhi',
    location: 'University Enclave, Delhi',
    city: 'Delhi',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    reviews: 1987,
    fees: { min: 35000, max: 75000 },
    courses: ['B.A.', 'B.Sc', 'M.A.', 'M.Sc'],
    established: 1948,
    type: 'Arts',
    mode: 'Full-time',
    accreditation: ['NAAC A++', 'UGC', 'DU Affiliated'],
    highlights: ['Women Excellence', 'Academic Leadership', 'Cultural Heritage', 'Research Focus'],
    description: 'Top-ranked women\'s college of Delhi University known for academic excellence and women empowerment.'
  },
  {
    id: '606162',
    name: 'Bangalore Institute of Technology',
    location: 'VV Puram, Bangalore',
    city: 'Bangalore',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.0,
    reviews: 1234,
    fees: { min: 120000, max: 200000 },
    courses: ['B.E', 'M.Tech', 'MBA', 'MCA'],
    established: 1946,
    type: 'Engineering',
    mode: 'Full-time',
    accreditation: ['NAAC A', 'NBA', 'AICTE'],
    highlights: ['Established Legacy', 'Industry Partnerships', 'Good Faculty', 'Alumni Network'],
    description: 'One of the oldest engineering colleges in Karnataka with a strong tradition of technical education and industry connections.'
  },
  {
    id: '757677',
    name: 'Hindu College Delhi',
    location: 'University Enclave, Delhi',
    city: 'Delhi',
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.3,
    reviews: 2567,
    fees: { min: 32000, max: 68000 },
    courses: ['B.A.', 'B.Sc', 'B.Com', 'M.A.', 'M.Sc'],
    established: 1899,
    type: 'Arts',
    mode: 'Full-time',
    accreditation: ['NAAC A++', 'UGC', 'DU Affiliated'],
    highlights: ['Historic Legacy', 'Academic Excellence', 'Cultural Activities', 'Alumni Network'],
    description: 'One of the oldest and most prestigious colleges of Delhi University with rich academic heritage.'
  },
  {
    id: '939495',
    name: 'Sri Venkateswara College Delhi',
    location: 'Dhaula Kuan, Delhi',
    city: 'Delhi',
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.2,
    reviews: 1876,
    fees: { min: 28000, max: 65000 },
    courses: ['B.A.', 'B.Sc', 'B.Com', 'M.A.', 'M.Sc'],
    established: 1961,
    type: 'Science',
    mode: 'Full-time',
    accreditation: ['NAAC A+', 'UGC', 'DU Affiliated'],
    highlights: ['Science Focus', 'Research Culture', 'Modern Labs', 'Academic Excellence'],
    description: 'Well-known college of Delhi University with strong emphasis on science education and research.'
  },
  {
    id: '5',
    name: 'National Institute of Fashion Technology Delhi',
    location: 'Hauz Khas, New Delhi',
    city: 'Delhi',
    image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.3,
    reviews: 892,
    fees: { min: 300000, max: 600000 },
    courses: ['B.Des', 'M.Des', 'MBA', 'Certificate Courses', 'Diploma'],
    established: 1986,
    type: 'Arts',
    mode: 'Full-time',
    accreditation: ['UGC', 'AICTE', 'Ministry of Textiles'],
    highlights: ['Fashion Industry Leader', 'Creative Excellence', 'Industry Partnerships', 'Design Innovation'],
    description: 'Leading fashion and design institute with strong industry connections. NIFT is the premier institute for fashion education in India.'
  },
  {
    id: '6',
    name: 'Christ University',
    location: 'Hosur Road, Bangalore',
    city: 'Bangalore',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.4,
    reviews: 2134,
    fees: { min: 180000, max: 450000 },
    courses: ['B.Tech', 'BBA', 'BA', 'MA', 'MBA', 'B.Com', 'M.Com', 'B.Sc'],
    established: 1969,
    type: 'Arts',
    mode: 'Full-time',
    accreditation: ['NAAC A++', 'UGC', 'AICTE'],
    highlights: ['Holistic Education', 'Cultural Activities', 'Good Infrastructure', 'Diverse Programs'],
    description: 'Renowned university offering diverse programs with emphasis on holistic development. Christ University is known for its academic excellence and vibrant campus life.'
  },
  {
    id: '7',
    name: 'Jawaharlal Nehru University',
    location: 'New Mehrauli Road, New Delhi',
    city: 'Delhi',
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.2,
    reviews: 1567,
    fees: { min: 50000, max: 200000 },
    courses: ['BA', 'MA', 'M.Phil', 'PhD', 'B.A. (Hons)', 'M.A. (Hons)'],
    established: 1969,
    type: 'Arts',
    mode: 'Full-time',
    accreditation: ['NAAC A++', 'UGC', 'NIRF Rank 2 University'],
    highlights: ['Research Excellence', 'Liberal Arts', 'Diverse Community', 'Academic Freedom'],
    description: 'Central university known for social sciences and liberal arts education. JNU is renowned for its academic excellence and vibrant intellectual environment.'
  },
  {
    id: '8',
    name: 'RV College of Engineering',
    location: 'Mysore Road, Bangalore',
    city: 'Bangalore',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.1,
    reviews: 1876,
    fees: { min: 150000, max: 250000 },
    courses: ['B.E', 'M.Tech', 'MBA', 'MCA', 'PhD'],
    established: 1963,
    type: 'Engineering',
    mode: 'Full-time',
    accreditation: ['NAAC A+', 'NBA', 'AICTE', 'VTU Affiliated'],
    highlights: ['Good Placement', 'Industry Connect', 'Modern Labs', 'Research Focus'],
    description: 'Well-established engineering college with strong industry partnerships. RVCE is known for its quality education and excellent placement records.'
  },
  {
    id: '9',
    name: 'Delhi University (North Campus)',
    location: 'North Campus, Delhi',
    city: 'Delhi',
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.3,
    reviews: 5432,
    fees: { min: 25000, max: 150000 },
    courses: ['B.A.', 'B.Sc', 'B.Com', 'M.A.', 'M.Sc', 'M.Com', 'PhD'],
    established: 1922,
    type: 'Arts',
    mode: 'Full-time',
    accreditation: ['NAAC A++', 'UGC', 'NIRF Rank 11'],
    highlights: ['Historic Legacy', 'Diverse Courses', 'Affordable Education', 'Cultural Hub'],
    description: 'One of India\'s largest and most prestigious universities. DU offers a wide range of undergraduate and postgraduate programs with a rich academic tradition.'
  },
  {
    id: '10',
    name: 'Bangalore Institute of Technology',
    location: 'VV Puram, Bangalore',
    city: 'Bangalore',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.0,
    reviews: 1234,
    fees: { min: 120000, max: 200000 },
    courses: ['B.E', 'M.Tech', 'MBA', 'MCA'],
    established: 1946,
    type: 'Engineering',
    mode: 'Full-time',
    accreditation: ['NAAC A', 'NBA', 'AICTE'],
    highlights: ['Established Legacy', 'Industry Partnerships', 'Good Faculty', 'Alumni Network'],
    description: 'One of the oldest engineering colleges in Karnataka with a strong tradition of technical education and industry connections.'
  },
  {
    id: '11',
    name: 'Lady Shri Ram College for Women',
    location: 'Lajpat Nagar, New Delhi',
    city: 'Delhi',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.5,
    reviews: 987,
    fees: { min: 30000, max: 80000 },
    courses: ['B.A.', 'B.Com', 'B.Sc', 'M.A.', 'M.Com'],
    established: 1956,
    type: 'Arts',
    mode: 'Full-time',
    accreditation: ['NAAC A++', 'UGC', 'DU Affiliated'],
    highlights: ['Women Empowerment', 'Academic Excellence', 'Cultural Activities', 'Strong Alumni'],
    description: 'Premier women\'s college known for academic excellence and women empowerment. LSR is one of the most sought-after colleges in Delhi University.'
  },
  {
    id: '12',
    name: 'Mount Carmel College',
    location: 'Palace Road, Bangalore',
    city: 'Bangalore',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.2,
    reviews: 1543,
    fees: { min: 80000, max: 200000 },
    courses: ['B.A.', 'B.Com', 'B.Sc', 'BBA', 'M.A.', 'M.Com', 'MBA'],
    established: 1948,
    type: 'Arts',
    mode: 'Full-time',
    accreditation: ['NAAC A+', 'UGC'],
    highlights: ['Women\'s Education', 'Holistic Development', 'Good Infrastructure', 'Industry Connect'],
    description: 'Autonomous women\'s college known for quality education and holistic development. Mount Carmel has a strong reputation for academic excellence.'
  }
];

export const cities = ['All', 'Bangalore', 'Delhi'];
export const collegeTypes = ['All', 'Engineering', 'Management', 'Medical', 'Arts', 'Commerce', 'Science'];
export const feesRanges = [
  { label: 'Under ₹1L', value: [0, 100000] },
  { label: '₹1L - ₹5L', value: [100000, 500000] },
  { label: '₹5L - ₹10L', value: [500000, 1000000] },
  { label: '₹10L - ₹25L', value: [1000000, 2500000] },
  { label: 'Above ₹25L', value: [2500000, 10000000] }
];