@layout("layout.admin")

@section("content")
@parent
<div id="content">
	<div class="titlebar clearfix">
		<h2>Maps</h2>
	</div>
	<a href="{{ URL::to_action("maps@new") }}" class="btn" style="margin-bottom:15px"><i class="icon-plus"></i> New Map</a>
	<table id="sortable" class="table table-bordered table-hover">
		<thead>
			<tr>
				<th>ID</th>
				<th>Map name</th>
				<th>Date created</th>
				<th><abbr title="Published">P</abbr></th>
				<th class="disabled">&nbsp;</th>
			</tr>
		</thead>
		<tbody>
		@foreach ($maps as $item)
			<tr>
				<td>{{ $item->id }}</td>
				<td>{{ HTML::link_to_action("maps@view", $item->title, array($item->id, $item->slug), array("target" => "_blank")) }}</td>
				<td>{{ date("F j, Y h:i e", strtotime($item->created_at)) }}</td>
				<td>
					@if($item->published)
						<i class="icon-eye-open" title="Published"></i>
					@else
						<i class="icon-eye-close" title="Not Published"></i>
					@endif
				</td>
				<td>
				<div class="btn-group">
					<a class="btn btn-primary" href="#" data-toggle="dropdown" >Actions</a>
					<a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li><a href="{{ URL::to_action("admin.maps@edit", array($item->id)) }}"><i class="icon-pencil"></i> Edit</a></li>
						@if ($item->published)
						<li><a href="{{ URL::to_action("admin.maps@unpublish", array($item->id)) }}"><i class="icon-eye-close"></i> Unpublish</a></li>
						@else
						<li><a href="{{ URL::to_action("admin.maps@publish", array($item->id)) }}"><i class="icon-eye-open"></i> Publish</a></li>
						@endif
						@if ($item->featured == 1)
						<li><a href="{{ URL::to_action("admin.maps@unfeature", array($item->id)) }}" title="will make this map unfeatured"><i class="icon-remove"></i> UnFeature</a></li>
						@elseif ($item->featured == 0)
						<li><a href="{{ URL::to_action("admin.maps@feature", array($item->id)) }}" title="will make this map featured"><i class="icon-heart"></i> Feature</a></li>
						@else
						@endif
						@if ($item->official == 1)
						<li><a href="{{ URL::to_action("admin.maps@unofficial", array($item->id)) }}" title="will make this map unofficial"><i class="icon-exclamation-sign"></i> UnOfficial</a></li>
						@elseif ($item->official == 0)
						<li><a href="{{ URL::to_action("admin.maps@official", array($item->id)) }}" title="will make this map official"><i class="icon-star"></i> Official</a></li>
						@else
						@endif
						<li><a href="{{ URL::to_action("admin.maps@delete", array($item->id)) }}"><i class="icon-trash"></i> Delete</a></li>
					</ul>
				</div>
				</td>
		@endforeach
			</tr>
		</tbody>
	</table>
</div>
@endsection