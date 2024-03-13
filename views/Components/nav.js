const navbar = document.querySelector('#navbar');

const createNavHome = () => {

    navbar.innerHTML = `

    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/images/Captura de pantalla 2024-02-16 030656.png" class="h-20" alt="Logo">
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white font-serif"> </span>
    </a>
    <div class="flex md:order-2 space-x-4 p-3 md:space-x-4 rtl:space-x-reverse">
        <a href="/signup/" class="hidden md:block text-white border border-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up

        </a>
        <a href="/login/" class="hidden md:block text-white bg-transparent  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login

        </a>
          <span class="sr-only md:hidden">Open main menu</span>
          <svg class="w-5 h-5 md:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
    </div>

    `;
};

const createNavSignup = () => {

    navbar.innerHTML = `
    <!-- Logotipo -->
    <img src="/images/drago.jpeg" class="h-24 w-24 flex" alt="gdfhdfh">
        <div class="text-white text-2xl font-extrabold cursor-pointer animate-bounce">
            Alejandro's Barbershop
        </div>
    
        <!-- Enlaces de navegación -->
        <div class="space-x-4 p-4">
            <a href="/login/" class=" login-button text-white hover:text-gray-300">Login</a>
        </div>
    `;
};

const createNavLogin = () => {

    navbar.innerHTML = `
      <div
        class="container px-4 mx-auto flex flex-wrap items-center justify-between"
      >
        <div
          class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
        >
          <img class="h-12 flex items-center space-x-3 rtl:space-x-reverse " src="/images/Captura de pantalla 2024-02-16 030656.png" alt="1">
          >
          <button
            class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
          >
            <i class="text-white fas fa-bars"></i>
          </button>
        </div>
      </div>
    `
};

const createNavABarberP = () => {

    navbar.innerHTML = `
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/images/Captura de pantalla 2024-02-16 030656.png" class="h-20" alt="Flowbite Logo">
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white font-serif"></span>
    </a>
    <div class="flex md:order-2 space-x-4 p-3 md:space-x-4 rtl:space-x-reverse">
    <a href="#" class="hidden md:block text-white border border-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver Citas agendadas
          </a>
    <span class="sr-only block md:hidden">Open main menu</span>
          <svg class="w-5 h-5 text-white md:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
    </div>
`;
};

const createNavAdmin = () => {

    navbar.innerHTML = `

    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/images/Captura de pantalla 2024-02-16 030656.png" class="h-20" alt="Logo">
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white font-serif"> </span>
    </a>
    <div class="flex md:order-2 space-x-4 p-3 md:space-x-4 rtl:space-x-reverse">
       
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
    </div>

    `;
};


if (window.location.pathname === '/') {
    createNavHome();
} else if (window.location.pathname === '/signup/') {
    createNavSignup();
} else if (window.location.pathname === '/login/') {
    createNavLogin();
} else if (window.location.pathname === '/ABarberP/') {
    createNavABarberP();
} else if (window.location.pathname === '/Admin/') {
    createNavAdmin();
}



