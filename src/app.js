
"use strict"

const servicesButton = Array.from(document.querySelectorAll('.about_button'));
servicesButton.forEach( button => {
  button.addEventListener('click', showImageBlur);
});

const boxButton = Array.from(document.querySelectorAll('.summary_text'));
boxButton.forEach( button => { 
  button.addEventListener('click', showAccordion);
});

document.addEventListener("click", showList);

const selectButton = document.querySelector('.city_text');
selectButton.addEventListener('click', showCityValue);

const cityLink = Array.from(document.querySelectorAll('.city_link'));
cityLink.forEach(link => {
  link.addEventListener('click', openPopUp);
});

function showList(event) {
    const targetItem = event.target;
    if (targetItem.closest('.icon-menu')) {
      document.documentElement.classList.toggle('menu-open');
    }
};

function showImageBlur(event) {
  event.preventDefault();

  let serviceButton = event.target.closest('.about_button');
  serviceButton.classList.toggle('active');
  let serviceImage = Array.from(document.querySelectorAll('.body_item'));
  serviceImage.forEach( image => {
    
      if (serviceButton.text === 'Gardens' && image.childNodes[3].innerText === 'Garden care') {
      image.style.filter = 'blur(0px)';
    } else if ( serviceButton.text === 'Lawn' && image.childNodes[3].innerText === 'Lawn care'){
      image.style.filter = 'blur(0px)';
    } else if ( serviceButton.innerText === image.childNodes[3].innerText ) {
      image.style.filter = 'blur(0px)';
    } else {
      image.style.filter = 'blur(10px)';
    }
  })
};


function showAccordion(event) {
event.preventDefault();

let currentBox = event.target.closest('.summary_text');
let currentContent = event.target.parentElement.parentElement;
let currentImage = event.target.children[0];
currentBox.classList.toggle('active');

 if (currentBox.classList.contains('active')) {
  currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
  currentContent.style.background = '#D6E7D2';
  currentImage.src = './mkdir plants/accordion_btn-2.svg';
 } else {
  currentContent.style.maxHeight = '49px';
  currentContent.style.background = '#EDF2EC';
  currentImage.src = './mkdir plants/accordion_btn.svg' ;
 }
};

function showCityValue(event) {
  event.preventDefault();
let citySelect = event.target.closest('.city_text');
let selectContent = event.target.nextElementSibling;
let popUpContent = document.querySelector('.contacts_pop-up');
citySelect.classList.toggle('active');

if(citySelect.classList.contains('active')) {
  selectContent.style.display = 'block';
  citySelect.style.backgroundColor = '#C1E698';
  event.target.innerHTML = 'City<img src="./mkdir plants/accordion_btn-2.svg" class="contacts-accordion_button" alt="button">';

} else {
  popUpContent.style.display = 'none';
  selectContent.style.display = 'none';
  citySelect.style.backgroundColor = '#D6E7D2';
  event.target.innerHTML = 'City<img src="./mkdir plants/accordion_btn.svg" class="contacts-accordion_button" alt="button">';
}
};

function openPopUp(event) {
  event.preventDefault();
  let cityInformation = [
    {city: 'Yonkers, NY', phone: '+1 914 678 0003', officeAdress:'511 Warburton Ave' },
    {city: 'Canandaigua, NY', phone: '+1 585 393 0001', officeAdress: '151 Charlotte Street'},
    {city: 'Sherrill, NY', phone: '+1 315 908 0004', officeAdress: '14 WEST Noyes BLVD'},
    {city: 'New York City', phone: '+1 212 456 0002', officeAdress: '9 East 91st Street'},
  ];

    let cityLink = event.target.closest('.city_link');
    let cityContent = document.querySelector('.contacts_pop-up');
    cityLink.classList.toggle('active');
    
   const currentPopUp = cityInformation.find(({city, phone, officeAdress}) => {
    if(cityLink.textContent === city) {
      cityContent.style.display = 'block';
      document.querySelector('.city_text').innerHTML = city;
      document.querySelector('.selected_city').style.display = 'none';
      document.querySelector('.contacts_city').innerHTML = city;
      document.querySelector('.contacts_phone').innerHTML = phone;
      document.querySelector('.contacts_office-adress').innerHTML = officeAdress;
    } 
   });
}