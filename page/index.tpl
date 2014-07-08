{% extends 'spa:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        <!--默认加载首页-->
        <!-- {% widget "spa:widget/pagelets/home/home.tpl" id="home" mode="async" for="pages-container" %} -->
     </div>

     {% script %}
        require('spa:widget/js/index/index.js').init();
     {% endscript %}

     {% require "spa:page/index.tpl" %}
{% endblock %}