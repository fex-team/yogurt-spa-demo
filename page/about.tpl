{% extends 'spa:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% if isAjax %}
            {% widget "spa:widget/pagelets/about/about.tpl" id="body" mode="quickling" for="pages-container" %}
        {% else %}
            {% widget "spa:widget/pagelets/about/about.tpl" %}
        {% endif %}
     </div>
     
     {% script %}
        require('spa:widget/js/index/index.js').init();
     {% endscript %}

     {% require "spa:page/index.tpl" %}
{% endblock %}