// Burger menu
let burgerBtn = document.querySelector('.burger-menu'),
    navList = document.querySelector('.header-nav__list'),
    links = document.querySelectorAll('.header-link'),
    bottomNavList = document.querySelector('.header-bottom-nav-list');

links.forEach((link) => {
  link.addEventListener('click', () => {
    burgerBtn.classList.remove('burger-menu_active');
    navList.classList.remove('header-nav__list_active');
    bottomNavList.classList.remove('header-bottom-nav-list_active');
  })
})

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger-menu_active');
  navList.classList.toggle('header-nav__list_active');
  if (window.innerWidth < 768) {
    bottomNavList.classList.toggle('header-bottom-nav-list_active');
  }
});

//--------------------


// Show air block
let airBtn = document.querySelector('.air-wrap'),
  archiveBlock = document.querySelector('.header-archive'),
  archiveBtnPlay = document.querySelector('.play-btn'),
  archiveBtnPlus = document.querySelector('.air-wrap__icon');

if (window.innerWidth > 1024) {
  archiveBlock.classList.remove('header-archive_close');
}

const showArchiveBlock = () => {
  archiveBlock.classList.remove('header-archive_close');
  archiveBlock.classList.toggle('header-archive_active');
  archiveBtnPlus.classList.toggle('air-wrap__icon_close');
  if (archiveBlock.classList.contains('header-archive_active')) {
    archiveBlock.classList.remove('animate__animated', 'animate__bounceOutUp');
    archiveBlock.classList.add('animate__animated', 'animate__bounceInDown');
  } else {
    archiveBlock.classList.remove('animate__animated', 'animate__bounceInDown');
    archiveBlock.classList.add('animate__animated', 'animate__bounceOutUp');
  }
}

airBtn.addEventListener('click', () => {
  showArchiveBlock();
})

archiveBtnPlay.addEventListener('click', () => {
  showArchiveBlock();
})
//--------------------------


// Play archive header
let archiveHeaderBtn = document.querySelectorAll('.archive-btn');

archiveHeaderBtn.forEach((el) => {
  el.addEventListener('click', function () {
    this.children[0].classList.toggle('archive-btn-icon_hidden');
    this.children[1].classList.toggle('archive-btn-icon-pause_hidden');
  })
})
//----------------------


// Play podcast
let playBtnPodcast = document.querySelectorAll('.card-main-btn-wrap');

playBtnPodcast.forEach((el) => {
  el.addEventListener('click', function () {
    this.children[0].classList.toggle('card-main-btn-wrap__icon_hidden');
    this.children[1].classList.toggle('card-main-btn-wrap__icon-pause');
  })
})
//--------------------


// Show additional podcasts
let showPodcastsBtn = document.querySelector('.show-podcasts'),
  podcastsCards = document.querySelectorAll('.podcasts__card');

showPodcastsBtn.addEventListener('click', () => {
  podcastsCards.forEach((card) => {
    card.classList.add('podcasts__card--visible')
  });
  showPodcastsBtn.classList.add('show-podcasts--hidden');
})
//--------------------------


// Custom select
const customSelect = document.querySelector('#CustomSelect');
const choices = new Choices(customSelect, {
  searchEnabled: false,
  shouldSort: false,
});
//-------------------------


// Form validate
const validation = new JustValidate('.form-wrap');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя слишком короткое',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя слишком длинное',
    },
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
  ])
  .addField('#mail', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Ошибка',
    },
  ]);
//--------------------------


//Accordion
$(".accordion").accordion({
  heightStyle: "content",
  active: false,
  collapsible: true,
});

let questionItems = document.querySelectorAll('.quests-list__item'),
  plusBtn = document.querySelectorAll('.icon');

questionItems.forEach((item) => {
  item.addEventListener('click', () => {
    plusBtn.forEach((btn) => {
      btn.classList.remove('icon_active');
    });
    let activeItem = document.querySelector('.ui-accordion-header-active').querySelector('.icon'),
      accordionItem = document.querySelectorAll('.quests-list__item');
    activeItem.classList.add('icon_active');
    accordionItem.forEach(el => {
      el.addEventListener('click', () => {
        accordionItem.forEach(item => {
          if (item.children[0].classList.contains('ui-accordion-header-active')) {
            item.classList.remove('quests-list__item_close');
            item.classList.add('quests-list__item_open');
          } else {
            item.classList.add('quests-list__item_close');
            item.classList.remove('quests-list__item_open');
          }
        })

      });
    });
  });
});

let accordionLinks = document.querySelectorAll('.accordion-link'),
  descBlockQuestEmpty = document.querySelector('.guests-desc-wrap-empty'),
  descBlockQuest = document.querySelector('.guests-desc-wrap');

  accordionLinks.forEach(el => {
    el.addEventListener('click',  function () {
      accordionLinks.forEach(item => {
        item.classList.remove('accordion-link_active');
      })
      if (el.classList.contains('olga-martynova')) {
        descBlockQuestEmpty.classList.add('guests-desc-wrap-empty_close');
        descBlockQuest.classList.remove('guests-desc-wrap_close');
      } else {
        descBlockQuestEmpty.classList.remove('guests-desc-wrap-empty_close');
        descBlockQuest.classList.add('guests-desc-wrap_close');
      }
      el.classList.add('accordion-link_active');
    })
  })
//-------------------------------------------------

