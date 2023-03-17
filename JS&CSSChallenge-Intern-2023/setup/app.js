// self invoking function
(function () {
  const likeButtonClass = 'like-button';
  // couldn't load json data from file because of CORS issues
  const jsonData =
    '[{"image":"https://placekitten.com/600/400","caption":"Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.","type":"image","source_type":"facebook","source_link":"https://www.facebook.com/EmbedSocial/","date":"2018-03-12 03:00:00","likes":"123","name":"John Smith","profile_image":"https://placekitten.com/g/100/100"},{"image":"https://placekitten.com/600/410","caption":"Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ","type":"image","source_type":"instagram","source_link":"https://instagram.com/embedsocial/","date":"2019-01-12 03:00:00","likes":"0","name":"John Smith","profile_image":"https://placekitten.com/g/150/100"},{"image":"https://placekitten.com/600/420","caption":"","type":"image","source_type":"facebook","source_link":"https://instagram.com/embedsocial/","date":"2017-01-21 03:00:00","likes":"9866555","name":"John Smith","profile_image":"https://placekitten.com/g/100/150"},{"image":"https://placekitten.com/600/430","caption":"Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.","type":"image","source_type":"facebook","source_link":"https://www.facebook.com/EmbedSocial/","date":"2019-12-12 03:00:00","likes":"2","name":"John Smith","profile_image":"https://placekitten.com/g/120/120"},{"image":"https://placekitten.com/600/440","caption":"Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.","type":"image","source_type":"facebook","source_link":"https://instagram.com/embedsocial/","date":"2018-04-12 03:00:00","likes":"12343","name":"John Smith","profile_image":"https://placekitten.com/g/50/50"},{"image":"https://placekitten.com/600/440","caption":"Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.","type":"image","source_type":"facebook","source_link":"https://www.facebook.com/EmbedSocial/","date":"2019-12-12 03:00:00","likes":"123","name":"John Smith","profile_image":"https://placekitten.com/g/101/101"},{"image":"https://placekitten.com/800/400","caption":"Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.","type":"image","source_type":"facebook","source_link":"https://www.facebook.com/EmbedSocial/","date":"2019-12-12 03:00:00","likes":"12","name":"John Smith","profile_image":"https://placekitten.com/g/150/120"},{"image":"https://placekitten.com/600/500","caption":"Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.","type":"image","source_type":"facebook","source_link":"https://instagram.com/embedsocial/","date":"2017-12-12 03:00:00","likes":"23","name":"John Smith","profile_image":"https://placekitten.com/g/140/140"},{"image":"https://placekitten.com/700/400","caption":"Pellentesque lacinia volutpat turpis non fermentum. Cras at pellentesque augue. Aliquam eget metus sit amet turpis consectetur posuere.","type":"image","source_type":"facebook","source_link":"https://www.facebook.com/EmbedSocial/","date":"2017-12-08 03:00:00","likes":"0","name":"John Smith","profile_image":"https://placekitten.com/g/100/100"},{"image":"https://placekitten.com/700/500","caption":"Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.","type":"image","source_type":"facebook","source_link":"https://www.facebook.com/EmbedSocial/","date":"2019-02-12 03:00:00","likes":"0","name":"John Smith","profile_image":"https://placekitten.com/g/102/102"},{"image":"https://placekitten.com/800/600","caption":"Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor. Vivamus ultricies congue arcu eu porttitor. Integer libero tortor, volutpat a purus id, mattis tristique tortor. ","type":"image","source_type":"facebook","source_link":"https://www.facebook.com/EmbedSocial/","date":"2019-12-12 03:00:00","likes":"2","name":"John Smith","profile_image":"https://placekitten.com/g/103/100"},{"image":"https://placekitten.com/700/600","caption":"Duis in facilisis lectus.","type":"image","source_type":"facebook","source_link":"https://instagram.com/embedsocial/","date":"2020-12-12 03:00:00","likes":"1","name":"John Smith","profile_image":"https://placekitten.com/g/40/100"},{"image":"https://placekitten.com/1600/1400","caption":"Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.","type":"image","source_type":"facebook","source_link":"https://www.facebook.com/EmbedSocial/","date":"2019-12-15 03:00:00","likes":"2324","name":"John Smith","profile_image":"https://placekitten.com/g/80/100"},{"image":"https://placekitten.com/1600/400","caption":"Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor.","type":"image","source_type":"facebook","source_link":"https://www.facebook.com/EmbedSocial/","date":"2019-10-12 03:00:00","likes":"1223","name":"John Smith","profile_image":"https://placekitten.com/g/80/80"},{"image":"https://placekitten.com/2000/4000","caption":"Quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.","type":"image","source_type":"facebook","source_link":"https://instagram.com/embedsocial/","date":"2016-12-12 03:00:00","likes":"12223","name":"John Smith","profile_image":"https://placekitten.com/g/110/110"},{"image":"https://placekitten.com/900/600","caption":" Suspendisse finibus lorem nibh, facilisis ullamcorper nunc consequat sit amet. Curabitur ultricies magna ante, ac eleifend lorem auctor porta. Nullam volutpat aliquet lorem, et posuere ex aliquet eu. Quisque elementum sem mauris, a mattis est scelerisque vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut quis massa eget ligula euismod sagittis id congue quam. Duis vestibulum eros sed tincidunt rutrum. Pellentesque in malesuada velit.","type":"image","source_type":"facebook","source_link":"https://www.facebook.com/EmbedSocial/","date":"2017-12-12 03:00:00","likes":"0","name":"John Smith","profile_image":"https://placekitten.com/g/110/100"},{"image":"https://placekitten.com/600/410","caption":"Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ","type":"image","source_type":"instagram","source_link":"https://instagram.com/embedsocial/","date":"2019-01-12 03:00:00","likes":"0","name":"John Smith","profile_image":"https://placekitten.com/g/150/100"},{"image":"https://placekitten.com/600/420","caption":"","type":"image","source_type":"facebook","source_link":"https://instagram.com/embedsocial/","date":"2017-01-21 03:00:00","likes":"9866555","name":"John Smith","profile_image":"https://placekitten.com/g/100/150"},{"image":"https://placekitten.com/600/430","caption":"Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.","type":"image","source_type":"facebook","source_link":"https://www.facebook.com/EmbedSocial/","date":"2019-12-12 03:00:00","likes":"2","name":"John Smith","profile_image":"https://placekitten.com/g/120/120"},{"image":"https://placekitten.com/600/440","caption":"Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.","type":"image","source_type":"facebook","source_link":"https://instagram.com/embedsocial/","date":"2018-04-12 03:00:00","likes":"12343","name":"John Smith","profile_image":"https://placekitten.com/g/50/50"}]';
  const parsedData = JSON.parse(jsonData);
  let loadMoreClickCount = 0;
  let numberOfGridColumns = 4;
  let rowTrackerIndex = 0;

  const columnNumberOption = document.getElementById(`column-number-option-${numberOfGridColumns}`);
  columnNumberOption.setAttribute('selected', 'selected');
  const layoutContainer = document.getElementById('layout-container');
  layoutContainer.style.gridTemplateColumns = `repeat(${numberOfGridColumns}, 1fr)`;
  let loadMoreButton = document.getElementById('load-more-button');
  loadMoreButton.addEventListener('click', event => {

    
    
    loadMoreClickCount++;
    if (rowTrackerIndex + numberOfGridColumns >= parsedData.length) {
      loadMoreButton.style.display = 'none';
      return;
    }
    
    
    generateRow(rowTrackerIndex);

    
  });
  const numberOfColumnsDropDown = document.getElementById('numberOfColumns');
  numberOfColumnsDropDown.addEventListener('change', handleSelectNumberOfColumns);

  generateRow(rowTrackerIndex);

  const darkTheme = document.getElementById('darkTheme');
  let lightTheme = document.getElementById('lightTheme');
  const cardContainers = document.querySelectorAll('.card');

  darkTheme.addEventListener('click', function () {
    cardContainers.forEach(cardContainer => {
      cardContainer.style.backgroundColor = 'black';
      cardContainer.style.color = 'white';
    });
  });

  lightTheme.addEventListener('click', function () {
    cardContainers.forEach(cardContainer => {
      cardContainer.style.backgroundColor = 'white';
      cardContainer.style.color = 'black';
  });
  });



  let cardBackgroundColor = document.getElementById('cardBackgroundColor');
 let preview = document.getElementsByClassName('preview')

  cardBackgroundColor.addEventListener('input', function () {
    // preview.style.backgroundColor = cardBackgroundColor.value;
  
  });

  function handleSelectNumberOfColumns() {
    const numberOfColumns = numberOfColumnsDropDown.value;
    if (numberOfColumns === 'dynamic') {
      return;
    }
    numberOfGridColumns = parseInt(numberOfColumnsDropDown.value, 10);
    destroyCards();
    layoutContainer.style.gridTemplateColumns = `repeat(${numberOfGridColumns}, 1fr)`;
    generateRow(rowTrackerIndex);
  }

  function generateHTMLCard(jsonItem, idNumber) {
    const image = jsonItem.image;
    const name = jsonItem.name;
    const profile_image = jsonItem.profile_image;
    const caption = jsonItem.caption;
    const likes = jsonItem.likes;
    const date = jsonItem.date;
    const source_link = jsonItem.source_link;
    const source_type = jsonItem.source_type;
    const type = jsonItem.type;

    layoutContainer.innerHTML =
      layoutContainer.innerHTML +
      `\n
      <div class="card" id="card-id-${idNumber}">
      
      <img class="img" src="${image}" alt="cat1" />
      <br />
      <span class="type">${type}</span>
       <p>
        ${caption}
      </p>
      <img class="img1" src="${profile_image}" alt="" />
      <br />
      <span class="tag">${name}</span>
      <br />
      <br />
      <button class="${likeButtonClass}" ><i class="fa-regular fa-heart"></i> like ${likes}</button>
      <a class="source_link" href="${source_link}"></a>
      <img class="img2" src="../icons/facebook.svg" alt="" />
      <a href="https://www.facebook.com/EmbedSocial/">${source_type}</a>
      <br />
      <br />
      <span class="date">Date ${date}"</span>

  </div>`;
  }

  function destroyCards() {
    layoutContainer.innerHTML = '';
    rowTrackerIndex = 0;
  }

  function generateRow(startingIndex) {
    for (let i = startingIndex; i < startingIndex + numberOfGridColumns; i++) {
      generateHTMLCard(parsedData[i], i);
    }
    rowTrackerIndex = startingIndex + numberOfGridColumns - 1;
    refreshLikeButtons();
  }

  function refreshLikeButtons() {
    const likeButtons = document.querySelectorAll(`.${likeButtonClass}`);

    // add click event listener to each button
    likeButtons.forEach(likeButton => {
      // likeButton.removeEventListener('click');
      let isLiked = false; // track button state
      let likes = parseInt(likeButton.textContent.match(/\d+/)[0]); // extract initial like count from button text

      likeButton.addEventListener('click', function () {
        if (!isLiked) {
          // if button is currently unliked
          likes++; // increase like count
          likeButton.innerHTML = `<i class="fa-regular fa-heart" ></i> like ${likes}`; // update button text

          const heartIcon = likeButton.firstChild;
          heartIcon.style.backgroundColor = 'red';
          isLiked = true; // set button state to "liked"
        } else {
          // if button is currently liked
          likes--; // decrease like count
          likeButton.innerHTML = `<i class="fa-regular fa-heart"></i> like ${likes}`; // update button text
          const heartIcon = likeButton.firstChild;
          heartIcon.style.backgroundColor = '';
          isLiked = false; // set button state to "unliked"
        }
      });
    });
  }
})();
