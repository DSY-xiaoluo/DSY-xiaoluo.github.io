document.addEventListener('DOMContentLoaded', function () {
  customElements.define('text-box', class extends HTMLElement {
    constructor() {
      super();
      const title = this.getAttribute('title');
      const color = this.getAttribute('color');
      const bgcolor = this.getAttribute('bgcolor');
      const bgcolor2 = this.getAttribute('bgcolor2');
      const more = this.getAttribute('more');
      const more2 = this.getAttribute('more2');
      const content = this.innerHTML;
      this.innerHTML = `
&lt;a name=&quot;#${title}&quot;&gt;&lt;/a&gt;
&lt;table class=&quot;textbox&quot; style=&quot;border: 1px solid ${bgcolor}; ${more}&quot;&gt;
&lt;thead ${more2}&gt;
&lt;tr&gt;
&lt;td style=&quot;background-color: ${bgcolor}; color: ${color}; font-weight: bold;&quot;&gt;
&lt;h3&gt;&lt;strong&gt;${title}&lt;/strong&gt;&lt;/h3&gt;
&lt;/td&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tr&gt;
&lt;td style=&quot;background-color: ${bgcolor2};&quot;&gt;
${content}
&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
`;
    }
  });
});