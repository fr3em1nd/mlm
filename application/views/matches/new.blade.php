@layout("layout.main")

@section("content")
@include("matches.menu")
<div id="content">
	{{ Form::open("matches/new", "POST", array("class" => "form-horizontal ")) }}
		{{ Form::token() }}
		{{ Form::field("text", "mapname", "Map name", array(Input::old("mapname")), array("error" => $errors->first("error"))) }}
		{{ Form::field("select", "gametype", "Game Type", array(Config::get("maps.types"), Input::old("gametype"), array('class' => 'input')), array('error' => $errors->first('gametype'))) }}
		{{ Form::field("text", "teamcount", "Team count", array(Input::old("teamcount")), array("error" => $errors->first("error"))) }}
		{{ Form::field("wysiwyg", "info", "Match Information", array(Input::old("info"), array("rows" => "15", 'class' => 'input-xxlarge')), array("error" => $errors->first("info"))) }}		
		{{ Form::field("checkbox", "private", "Private Match (not viewable by everyone)", array(Input::old("private")), array("error" => $errors->first("private"))) }}
		{{ Form::field("checkbox", "invite", "Invite Only (players must be invited)", array(Input::old("invite")), array("error" => $errors->first("invite"))) }}
		{{ Form::actions(Form::submit("Submit", array("class" => "btn-primary"))) }}
	{{ Form::close() }}
</div>
@endsection