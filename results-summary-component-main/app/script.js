const scoreData = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./images/icon-visual.svg"
  }
];

const container = document.querySelector('.list-score');

scoreData.forEach(item => {
  const element = document.createElement('li');

  const img = document.createElement('img');
  img.src = item.icon;
  img.alt = `${item.category} Icon`;

  const label = document.createElement('p');
  label.className = 'label';
  label.textContent = item.category;

  const score = document.createElement('p');
  score.className = 'score';
  score.innerHTML = `<span class="bold">${item.score}</span> / 100`;

  element.appendChild(img);
  element.appendChild(label);
  element.appendChild(score);

  container.appendChild(element);
});