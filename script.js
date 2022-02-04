function openCloseMenu() {
  const x = document.querySelector('.mobile-menu');
  const y = document.querySelector('body');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
    y.style.overflow = 'scroll';
  } else {
    x.style.display = 'flex';
    y.style.overflow = 'hidden';
  }
}
document.getElementById('onclick-open').addEventListener('click', openCloseMenu);
document.getElementById('onclick-close').addEventListener('click', openCloseMenu);
document.getElementById('onclick-about').addEventListener('click', openCloseMenu);
document.getElementById('onclick-program').addEventListener('click', openCloseMenu);
document.getElementById('onclick-partners').addEventListener('click', openCloseMenu);
document.getElementById('onclick-news').addEventListener('click', openCloseMenu);

const instructors = [
  {
    img2: 'imgs/AndreiNeagoie.jpg',
    name: 'Andrei Neagoie',
    position: 'Senior Software Developer',
    text: 'Andrei, lead instructor of Zero To Mastery Academy, has taught more than 500,000 students worldwide how to code and get hired.',
  },
  {
    img2: 'imgs/BrittneyPostma.jpg',
    name: 'Brittney Postma',
    position: 'Designer & Developer',
    text: 'Brittney is a self-taught developer with a background in Graphic Design, running her own freelance business.',
  },
  {
    img2: 'imgs/MattStuddert.jpg',
    name: 'Matt Studdert',
    position: 'Frontend Developer',
    text: 'Matt is the Founder of Frontend Mentor, which helps developers improve their front-end coding skills by building projects in a real-life workflow.',
  },
  {
    img2: 'imgs/DanielBourke.jpg',
    name: 'Daniel Bourke',
    position: 'Machine Learning Engineer',
    text: 'Daniel, a self-taught Machine Learning Engineer, has worked at one of Australia s fastest-growing artificial intelligence agencies.',
  },
];

const instruSection = document.querySelector('.instructorsList');

instructors.forEach((instructor) => {
  instruSection.innerHTML += `
<li class="instructor num1">
  <div class="left-sect">
    <img class="checker" src="imgs/checkerboard.png" alt="checkerboard">
    <img class="person" src="${instructor.img2}" alt="${instructor.name}">
  </div>
  <div class="right-sect">
    <h3>${instructor.name}</h3>
    <h4>${instructor.position}</h4> 
    <p>${instructor.text}</p>
  </div>
</li>
`;
});
