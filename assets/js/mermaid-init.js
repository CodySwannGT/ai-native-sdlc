// Mermaid initialization for Jekyll sites
(function() {
  // Wait for DOM to be ready
  function initMermaid() {
    // Check if mermaid is loaded
    if (typeof mermaid === 'undefined') {
      console.warn('Mermaid library not loaded, attempting to load...');
      
      // Create script element
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js';
      script.onload = function() {
        setupMermaid();
      };
      document.head.appendChild(script);
    } else {
      setupMermaid();
    }
  }
  
  function setupMermaid() {
    // Initialize mermaid with custom config
    mermaid.initialize({ 
      startOnLoad: false,
      theme: 'default',
      themeVariables: {
        primaryColor: '#e8f5e9',
        primaryTextColor: '#1a1a1a',
        primaryBorderColor: '#4caf50',
        lineColor: '#666',
        secondaryColor: '#c8e6c9',
        tertiaryColor: '#ffeb3b',
        background: 'white',
        mainBkg: '#e8f5e9',
        secondBkg: '#c8e6c9',
        tertiaryBkg: '#fff9c4'
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
      },
      securityLevel: 'loose'
    });
    
    // Find all code blocks marked as mermaid
    var mermaidCodeBlocks = document.querySelectorAll('pre > code.language-mermaid');
    
    mermaidCodeBlocks.forEach(function(codeBlock, index) {
      // Get the mermaid code
      var mermaidCode = codeBlock.textContent;
      
      // Create a unique ID for this diagram
      var mermaidId = 'mermaid-diagram-' + index;
      
      // Create a new div for mermaid
      var mermaidDiv = document.createElement('div');
      mermaidDiv.id = mermaidId;
      mermaidDiv.className = 'mermaid';
      
      // Replace the pre element with the mermaid div
      var preElement = codeBlock.parentElement;
      preElement.parentElement.insertBefore(mermaidDiv, preElement);
      preElement.style.display = 'none';
      
      // Render the mermaid diagram
      try {
        mermaid.render(mermaidId + '-svg', mermaidCode, function(svgCode) {
          mermaidDiv.innerHTML = svgCode;
        });
      } catch (error) {
        console.error('Mermaid rendering error:', error);
        mermaidDiv.innerHTML = '<p style="color: red;">Error rendering diagram</p>';
        preElement.style.display = 'block';
      }
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaid);
  } else {
    initMermaid();
  }
})();