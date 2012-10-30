@layout("layout.main")

@section("content")
@include("maps.menu")
<div id="content" class="edit clearfix">
<div class="titlebar">
	<h2>Editing map <b>{{ e($map->title) }}</b></h2>
</div>
<div id="page" class="bigger">
	{{ Form::open("maps/edit_meta/".$map->id, "POST", array("class" => "form")) }}
			{{ Form::token()}}
			{{ Form::field("text", "title", "Map name", array( Input::old("title", $map->title), array('class' => 'title', 'autocomplete' => 'off') ),  array( 'error' => $errors->first('title'), "help" => "Title should only have the map's name") ) }}
			{{ Form::field("textarea", "summary", "Summary", array(Input::old("summary",$map->summary), array("rows" => "15", 'class' => 'summary')), array('error' => $errors->first('summary'), "alt" => "(Explain your map 140 characters. Use correct grammar)")) }}
			{{ Form::field("wysiwyg-user", "description", "Description", array(Input::old("description", $map->title), array('class' => 'input-xxlarge')), array('error' => $errors->first('description'), "alt" => "(Use correct grammar)")) }}
			{{ Form::field("select", "maptype", "Map type", array(array_merge(array("" => "--------------"), Config::get("maps.types")), Input::old("maptype",$map->maptype), array('class' => 'input')), array('error' => $errors->first('maptype'))) }}
			{{ Form::field("text", "version", "Map version", array(Input::old("version",$map->version)), array("error" => $errors->first("version"), "help" => "Map version is the version of the map, not the version of the game. Remember to keep this up-to-date!")) }}
			{{ Form::field("text", "mcversion", "Minecraft version", array(Input::old("mcversion", $map->mcversion)), array("error" => $errors->first("mcversion"), "help" => "The Minecraft Version for the map should be the latest version of Minecraft that the map was tested on and fully worked.")) }}
			{{ Form::field("text", "teamcount", "Teams", array(Input::old("teamcount", $map->teamcount)), array("error" => $errors->first("teamcount"), "help" => "How many teams can play the map at once")) }}
			{{ Form::field("text", "teamsize", "Team Size", array(Input::old("teamsize",$map->teamsize)), array("error" => $errors->first("teamsize"), "help" => "Players per team")) }}
			{{ Form::actions(array(Form::submit("Save", array("class" => "btn-primary")), " ", HTML::link_to_action("maps@index", "Cancel", array(), array("class" => "btn")))) }}
		{{ Form::close() }}
	<div class="titlebar">
		<h3>Authors</h3>
	</div>
	<ul class="ulfix">
	@foreach($authors as $user)
		<li class="xpadding">
			<img src="{{ $user->avatar_url }}" alt="avatar" /> {{$user->username}}
			@if(!$user->pivot->confirmed)
				Hasn't yet accepted the invite
			@endif
			@if($user->id == Auth::user()->id)
				<small>(You cannot remove yourself)</small>
			@else
			@endif
		</li>
	@endforeach
	</ul>
	<div class="titlebar"><h4>Invite additional authors <small>(Use MLM username)</small></h4></div>
	{{ Form::open("maps/add_author/".$map->id, 'POST', array('class' => 'xpadding')) }} 	
		<fieldset> 
			<div>
			{{ Form::token() }}
			{{ Form::text("username") }} 
			{{ Form::submit("Invite", array("class" => "btn btn-primary")) }}
			</div>
		</fieldset>
	{{ Form::close() }}

<div class="titlebar">
	<h3>Download Links</h3>
</div>
<a href="{{ URL::to_action("maps@edit_link",  array($map->id)) }}" class="btn btn-mini" style="margin-bottom:10px"><i class="icon-plus"></i> Add Link</a>
	<table class="table">
		<thead>
			<tr>
				<th>URL</th>
				<th>Direct?</th>
				<th>Actions</th>
				<th>&nbsp;</th>
			</tr>
		</thead>
		<tbody>
			@forelse($map->links as $link)
				<tr>
					<td>{{ HTML::image($link->favicon, "favicon", array("width" => "12"))." ".HTML::link($link->url, $link->url) }}</td>
					<td>{{ $link->direct ? "&#10004;" : "" }}</td>
					<td>{{ HTML::link_to_action("maps@edit_link", "Edit", array($map->id, $link->id)) }}</td>
					<td>{{ HTML::link_to_action("maps@delete_link", "Delete", array($map->id, $link->id)) }}</td>
				</tr>
			@empty
				<tr>
					<td colspan="4">No links found!</td>
				</tr>
			@endforelse
		</tbody>
	</table>
<div class="titlebar">
	<h3>Images</h3>
</div>
	<ul class="thumbnails">
		@forelse($map->images as $image)
			<li>
				<div class="thumbnail">
					{{ HTML::image($image->file_small,"", array('width' => '160')) }}
				<div class="caption">
				@if($map->image_id != $image->id)
					{{ Form::open("maps/default_image/{$map->id}/{$image->id}", "POST", array("style" => "margin:0")) }}
						{{ Form::token() }}
						{{ Form::submit("Set Default", array("class" => "btn btn-small btn-success")) }}
						{{ HTML::link_to_action("maps@delete_image", "Delete", array($map->id, $image->id),array("class" => "btn btn-small btn-danger")) }}
					{{ Form::close() }}
				@else
					<span class="btn btn-small btn-success disabled">Default image</span>
					<span class="btn btn-small btn-danger disabled" title="You can't delete the default image">Delete</span>
				@endif
				</div>
				</div>
			</li>
		@empty
			<li>
				No images found!
			</li>
		@endforelse

	</ul>
<div class="titlebar">
	<h4>Upload new image</h4>
</div>
	{{ Form::open_for_files("maps/upload_image/".$map->id) }}
		{{ Form::token() }}
		{{ Form::field("file", "uploaded", "", array(array('class' => 'input-large')), array('error' => $errors->first('uploaded'))) }}
		{{ Form::field("text", "name", "", array(Input::old("name"), array('class' => 'input-large')), array("help-inline" => "Image name", 'error' => $errors->first('name'))) }}
		{{ Form::submit("Upload", array("class" => "btn-primary")) }}
	{{ Form::close() }}
</div>
@include("maps.sidebar")
</div>
@endsection