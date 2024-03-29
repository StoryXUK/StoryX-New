
        // JavaScript to load header.html into the <header> element
        window.addEventListener('DOMContentLoaded', function() {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        document.getElementById('page-header').innerHTML = xhr.responseText;
                    } else {
                        console.error('Failed to load header.html');
                    }
                }
            };
            xhr.open('GET', 'header.html', true);
            xhr.send();
        });
