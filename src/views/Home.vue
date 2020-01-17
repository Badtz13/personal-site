<template>
  <div class="container mx-auto mt-4 bg-white text-left shadow-md p-4">
    <div class="flex justify-between">
      <h1 class="text-2xl">Badtz</h1>
      <ul class="inline-flex text-blue-800 mt-1">
        <li class="hover:text-blue-600 mx-2">
          <a href="http://github.com/MiloCodes">GitHub</a>
        </li>
        <li class="hover:text-blue-600 mx-2">
          <a href="http://twitter.com/MiloCodes">Twitter</a>
        </li>
        <li class="hover:text-blue-600 mx-2">
          <a href="http://instagram.com/MiloCodes">Instagram</a>
        </li>
      </ul>
    </div>
    <div
      class="pt-2 pb-4 text-gray-600 text-sm"
    >Currently studying Computer Science / Japanese @ Western Washington University</div>
    <div class="container mx-auto bg-gray-200 h-16">
      Short content blurb about type of dev i do etc
    </div>
    <h2 class="py-2 text-lg">Projects</h2>
    <ul class="flex text-blue-800">
      <li class="flex flex-col mr-4 pr-2">
        <div class="w-32 h-16 overflow-hidden">
          <img src="https://i.imgur.com/yk0IrDA.png" alt="PSCS Attendance System" class="w-32">
        </div>
        <a class="hover:text-blue-600" href="http://attendance.pscs.org">PSCS Attendance</a>
        <a
          class="text-sm text-gray-600 hover:text-gray-500"
          href="https://github.com/PSCS-Coding/Attendance_System"
        >Source</a>
      </li>
      <li class="flex flex-col mr-4 pr-2">
        <div class="w-32 h-16 overflow-hidden">
          <img src="https://i.imgur.com/o4OQ4Z6.png" alt="BioParser" class="w-32">
        </div>
        <a
          class="hover:text-blue-600"
          href="https://jagresearch.github.io/motifAnalyzerPDZ/"
        >BioParser</a>
        <a
          class="text-sm text-gray-600 hover:text-gray-500"
          href="https://github.com/jagresearch/motifAnalyzerPDZ"
        >Source</a>
      </li>
      <li class="flex flex-col mr-4 pr-2">
        <div class="w-32 h-16 overflow-hidden">
          <img src="https://i.imgur.com/xEyuU6w.png" alt="WWU Classfinder Replacement" class="w-32">
        </div>
        <a class="hover:text-blue-600" href="https://classfinder.page/home">Classfinder.page</a>
        <a
          class="text-sm text-gray-600 hover:text-gray-500"
          href="https://github.com/MiloCodes/classfinder.page"
        >Source</a>
      </li>
      <li class="flex flex-col mr-4 pr-2">
        <div class="w-32 h-16 overflow-hidden">
          <img src="https://i.imgur.com/U5kb33e.jpg" alt="Tile Panel" class="w-32">
        </div>
        <a class="hover:text-blue-600" href="https://panel-6b9aa.firebaseapp.com">Tile Panel</a>
        <a
          class="text-sm text-gray-600 hover:text-gray-500"
          href="https://github.com/coderLads/panel"
        >Source</a>
      </li>
      <li class="flex flex-col mr-4 pr-2">
        <div class="w-32 h-16 overflow-hidden">
          <img src="https://i.imgur.com/ln3ZdzW.png" alt="Personal Site Badtz.dev" class="w-32">
        </div>
        <a class="hover:text-blue-600" href="https://badtz.dev">Badtz.dev</a>
        <a
          class="text-sm text-gray-600 hover:text-gray-500"
          href="https://github.com/MiloCodes/personal-site"
        >Source</a>
      </li>
    </ul>
    <div>
      <h3 class="pt-6 pb-2 text-lg">Skills</h3>
      <section>
        <div class="text-gray-600">I most often work with:</div>
        <ul class="flex text-blue-800">
          <li class="pr-4 py-2">HTML</li>
          <li class="pr-4 py-2">CSS</li>
          <li class="pr-4 py-2">Javascript</li>
          <li class="pr-4 py-2">NodeJS</li>
          <li class="pr-4 py-2">Vue</li>
          <li class="pr-4 py-2">Tailwind</li>
          <li class="pr-4 py-2">Firebase</li>
          <li class="pr-4 py-2">Yarn</li>
        </ul>
      </section>
      <section class="pt-2">
        <div class="text-gray-600">I have worked with:</div>
        <ul class="flex text-blue-800">
          <li class="pr-4 py-2">Typescript</li>
          <li class="pr-4 py-2">Electron</li>
          <li class="pr-4 py-2">Express</li>
          <li class="pr-4 py-2">PHP</li>
          <li class="pr-4 py-2">JQuery</li>
          <li class="pr-4 py-2">MySQL</li>
          <li class="pr-4 py-2">D3.js</li>
          <li class="pr-4 py-2">GraphQL</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {}
}
</script>
