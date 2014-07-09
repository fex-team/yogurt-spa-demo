{% extends 'spa:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% if isAjax %}
            {% widget "spa:widget/pagelets/contact/contact.tpl" id="body" mode="quickling" for="pages-container" %}
        {% else %}
            {% widget "spa:widget/pagelets/contact/contact.tpl" %}
        {% endif %}
     </div>
     
     {% script %}
        require('spa:widget/js/index/index.js').init();
     {% endscript %}

     {% require "spa:page/index.tpl" %}
{% endblock %}