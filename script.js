document.getElementById('portfolio-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const tagline = document.getElementById('tagline').value;
    const about = document.getElementById('about').value;
    const projects = document.getElementById('projects').value.split(',');

    const portfolioContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${name}'s Portfolio</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <header>
                <h1>${name}</h1>
                <p>${tagline}</p>
            </header>
            <main>
                <section id="about">
                    <h2>About Me</h2>
                    <p>${about}</p>
                </section>
                <section id="projects">
                    <h2>Projects</h2>
                    ${projects.map(project => `<div class="project"><h3>${project.trim()}</h3></div>`).join('')}
                </section>
            </main>
            <footer>
                <p>© 2024 ${name}</p>
            </footer>
        </body>
        </html>
    `;

    document.getElementById('portfolio-content').innerHTML = portfolioContent;
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('portfolio-section').style.display = 'block';

    // Create a Blob from the HTML string
    const blob = new Blob([portfolioContent], { type: 'text/html' });

    // Create a download link
    const downloadLink = document.getElementById('download-link');
    downloadLink.href = URL.createObjectURL(blob);
});
