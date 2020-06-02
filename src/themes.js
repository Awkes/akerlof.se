export const themes = [
  {
    primary: '#009DCF',
	  primaryTrans: 'rgba(0, 157, 207, 0.75)',
  },
  {
    primary: '#0f0',
	  primaryTrans: 'rgba(0, 255, 0, 0.75)',
  },
  {
    primary: '#0ff',
	  primaryTrans: 'rgba(0, 255, 255, 0.75)',
  },
  {
    primary: '#ff0',
	  primaryTrans: 'rgba(255, 255, 0, 0.75)',
  },
  {
    primary: '#f0f',
    primaryTrans: 'rgba(255, 0, 255, 0.75)'
  }
]

export function setTheme(index = null) {
  if (!index) index = localStorage.getItem('theme') || 0;
  else localStorage.setItem('theme', index);
  
  document.documentElement.style.setProperty(
    "--primary",
    themes[index].primary
  );
  document.documentElement.style.setProperty(
    "--primary-trans",
    themes[index].primaryTrans
  );
}