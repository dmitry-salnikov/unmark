if (unmark === undefined) { var unmark = {}; }

unmark.template = unmark.template || {};

unmark.template.sidebar = '<div class="sidebar-action"><a class="action" data-action="sidebar_expand" href="#"><i class="icon-heading_expand"></i></a><a class="action" data-action="sidebar_collapse" href="#"><i class="icon-heading_close"></i></a></div><div class="sidebar-label label-{{label_id}}"><span id="label-chosen"></span><a class="action" data-action="marks_addLabel" href="#" data-id="{{mark_id}}">{{label_name}}</a><ul class="sidebar-label-list" data-id="{{mark_id}}"></ul></div><div class="sidebar-info-panel">{{#embed}}<h4 class="prev-coll">Preview <i class="icon-up"></i></h4><section class="sidebar-info-preview">{{{embed}}}</section>{{/embed}}<h4 class="action" data-action="marks_editNotes">Notes <i class="icon-edit"></i></h4><section id="notes-{{mark_id}}" data-id="{{mark_id}}" class="sidebar-info-notes hideoutline">{{{notes}}}</section></div>{{#archived_on}}<button data-id="{{mark_id}}" data-view="sidebar" data-action="delete_mark">Delete Link</button>{{/archived_on}}';

unmark.template.marks = '<div id="mark-{{mark_id}}" class="mark label-{{label_id}}"><h2><a target="_blank" href="{{url}}">{{title}}</a></h2><div class="mark-meta"><span class="mark-date">{{nice_time}}</span><span class="mark-sep">•</span><span class="mark-link"><a target="_blank" href="{{url}}">{{prettyurl}}</a></span></div><div class="mark-actions" style="display: none;"><a class="action mark-archive tabletonly" href="#" data-action="show_mark_info" data-mark="mark-data-{{mark_id}}"><i class="icon-ellipsis"></i></a><a target="_blank" class="mark-info" href="{{url}}" data-mark="mark-data-{{mark_id}}"><i class="icon-goto_link"></i></a>{{#archived_on}}<a title="Unarchive Mark" class="action mark-archive" data-action="mark_restore" href="#" data-id="{{mark_id}}"><i class="icon-label"></i></a>{{/archived_on}}{{^archived_on}}<a title="Archive Mark" class="action mark-archive" data-action="mark_archive" href="#" data-id="{{mark_id}}"><i class="icon-check"></i></a>{{/archived_on}}</div><div class="note-placeholder"></div><script id="mark-data-{{mark_id}}" type="application/json">{"mark_id":"{{mark_id}}","label_id":"{{label_id}}","label_name":"{{label_name}}","notes":"{{notes}}",{{#embed}}"preview":{{embed}},{{/embed}}"archived":{{active}}}</script></div>';
