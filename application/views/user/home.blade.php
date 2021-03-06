@layout("layout.main")
@section('content')
@if($ownpage)
	@include("user.menu")
@endif
<div id="content" class="profile clearfix">
<header id="vcard" class="clearfix">
	<div class="avatar">
		@if($ownpage)
			<a href="http://minecraft.net/profile" target="_blank" title="Change your skin..."><img src="{{$user->avatar_url}}" alt="avatar" /></a>
		@else
			<a href="#" style="cursor:default" title="{{$user->username}}'s Skin"><img src="{{$user->avatar_url}}" alt="avatar" /></a>
		@endif
	</div>
	<div class="name">
		<h1>{{$user->username}}</h1>
		<h2><img src="{{ URL::to_asset("images/static/mc-icon.png") }}" title="Minecraft Username">{{$user->mc_username}}</h2>
		<h3>Joined {{ date("F j, Y", strtotime($user->created_at)) }}</h3>
	</div>
	<div class="stats">
		<ul>
			<li class="active"><a href="#user-maps" data-toggle="tab"><span>{{ count($user->maps) }}</span>Maps</a></li>
			<li><a href="#user-comments" data-toggle="tab"><span>{{ $user->comment_count }}</span>Comments</a></li>
		</ul>
	</div>
	<div class="abotalit">
		<ul>
			@if ($user->rank == 4)<li style="padding-left:0;"><div class="user-rank admin" title="MLM Admin"></div></li>
			@elseif ($user->rank == 3)<li style="padding-left:0;"><div class="user-rank dev" title="MLM Developer"></div></li>
			@elseif ($user->rank == 2)<li style="padding-left:0;"><div class="user-rank editor" title="MLM Editor"></div></li>
			@elseif ($user->rank == 1)<li style="padding-left:0;"><div class="user-rank mod" title="MLM Moderator"></div></li>
			@endif
			<li><a href="{{ URL::to("messages/new/".$user->username) }}" title="Message {{$user->username}}"><i class="icon-envelope-alt"></i></a></li>
			@if ($user->profile->reddit)
			<li><a href="http://reddit.com/user/{{$user->profile->reddit}}" target="_blank" rel="nofollow" title="reddit"><i class="icon-arrow-up"></i></a></li>
			@endif
			@if ($user->profile->twitter)<li><a href="http://twitter.com/{{$user->profile->twitter}}" target="_blank" rel="nofollow" title="Twitter"><i class="icon-twitter"></i></a></li>
			@endif
			@if ($user->profile->youtube)
			<li><a href="http://youtube.com/user/{{$user->profile->youtube}}" target="_blank" rel="nofollow" title="YouTube"><i class="icon-play"></i></a></li>
			@endif
			@if ($user->profile->webzone)
			<li><a href="{{$user->profile->webzone}}" target="_blank" rel="nofollow" title="Website"><i class="icon-globe"></i></a></li>
			@endif
		</ul>
	</div>
</header>
<div id="page" class="right">
	<div id="UserTabs" class="tab-content">
		<div class="tab-pane fade active in" id="user-maps">
			<div class="titlebar"><h2>Maps</h2></div>
			<div id="multiview">
				<ul class="list">
				@forelse($user->maps as $map)
				@if($map->published)
					<li>
					<a href="{{ URL::to_action("maps@view", array($map->id, $map->slug)) }}" title="View map">
						<div class="mv-image">
							@if($map->image)
							<img src="{{ URL::to_asset("images/static/blank.gif") }}" data-original="{{ e($map->image->file_medium) }}" alt="{{ e($map->title) }}" />
							@else
							<img src="{{ URL::to_asset("images/static/noimage.jpg") }}" data-original="{{ URL::to_asset("images/static/noimage.jpg") }}" alt="No Image" />
							@endif
						</div>
						<div class="mv-details">
							<div class="mv-icon">
								@if($map->featured)
								<span title="Featured Map"><i class="icon-star"></i></span>
								@elseif($map->official)
								<span title="Official Map"><i class="icon-trophy"></i></span>
								@endif
							</div>
							<div class="mv-title"><h1>{{ e($map->title) }}</h1></div>
							<div class="mv-summary"><p>{{ e($map->summary) }}</p></div>
							<div class="mv-meta">
								<span>By
									@foreach($map->users as $author)
									<b>{{ $author->username }}</b>,
									@endforeach
								</span>
								@if($map->version)
								<span>Version <b>{{e($map->version->version)}}</b>,</span>
								@endif
								<span>Type: <b>{{ array_get(Config::get("maps.types"), $map->maptype) }}</b></span>
							</div>
						</div>
						</a>
					</li>
				@endif
				@empty
				<div class="mv-details"><div class="mv-title">
				<h1 class="center">@if($ownpage)You haven't
					@else{{ $user->username }} has not
					@endif posted any maps :(
					@if($ownpage)<br><a href="/maps">Post a new map!</a>
					@endif
				</h1>
				</div></div>
				@endforelse
				</ul>
			</div>
		</div>
		<div class="tab-pane fade" id="user-comments">
			<div class="titlebar"><h2>Comments</h2></div>
				<div id="multiview">
				<ul class="list">
				@forelse($user->comments as $item)
					<li>
						@if($item->news_id != null)
						<a href="{{ URL::to_action("news@view", array($item->news->id, $item->news->slug)) }}" title="View comment">
						@else
						<a href="{{ URL::to_action("maps@view", array($item->map->id, $item->map->slug)) }}" title="View comment">
						@endif
						<div class="mv-details">
							<div class="mv-summary">{{ $item->html }}</div>
							<div class="mv-meta">
							<span>commented on <b>
								@if($item->news_id != null)
								{{ Str::limit($item->news->title, 30) }}
								@elseif($item->map_id != null)
								{{ Str::limit($item->map->title, 30) }}
								@else
								<b>[Deleted]</b>
								@endif
								</b></span> on <span><b>{{ date("M j,Y g:ia", strtotime($item->created_at)) }}</b></span>
							</div>
						</div>
						</a>
					</li>
				@empty
				<div class="mv-details"><div class="mv-title">
				<h1 class="center">@if($ownpage)You haven't
					@else{{ $user->username }} has not
					@endif posted any comments :(
				</h1>
				</div></div>
				@endforelse
				</ul>
			</div>
		</div>

	</div>
</div>
<div id="sidebar" class="left">
	<div class="block maxwidth">
		<div class="titlebar"><h2>Teams</h2></div>
		@forelse ($user->teams as $team)
		<div class="avatar"><img src="{{ $user->avatar_url }}" alt="avatar" width="60"/></div>
		<div class="name">
			<a href="{{ URL::to_action("teams@view", array($team->id)) }}">
			<h1>{{ $team->name }}</h1>
			<h2>{{ $team->tagline }}</h2>
			</a>
		</div>
	<div class="stats">
		<ul>
			<li><a href="{{ URL::to_action("teams@view", array($team->id)) }}#members"><span>{{ $team->users()->count() }}</span>Members</a></li>
			<li><a href="#" title="Coming Soon"><span>0</span>Wins</a></li>
			<li><a href="#" title="Coming Soon"><span>0</span>Loses</a></li>
		</ul>
	</div>
		@empty
			<h4 class="center">@if($ownpage)You're
				@else{{ $user->username }} is
				@endif not a member of a team :(
				@if($ownpage)<br><a href="/teams">Join a team!</a>
				@endif
			</h4>
		@endforelse
	</div>
	<div class="block maxwidth">
		<div class="titlebar"><h2>Groups</h2></div>
	<ul class="ulfix">
		@if($ownpage)
		<li class="xpadding center" style="margin-bottom: 0;">
		<div class="input-append">
			{{ Form::open("user/group", "POST") }}
			{{ Form::token() }}
			<input id="group" name="group" data-provide="typeahead" data-items="4" data-source="{{ e(json_encode($othergroups)) }}" type="text" autocomplete="off" placeholder="Join/Create a group">
			<button class="btn btn-inverse" name="action" value="join_textbox" type="submit">Join</button>
			{{ Form::close() }}
		</div>
		</li>
		@endif
		@forelse ($user->groups as $group)
		@if($group->pivot->invited == 1 || $ownpage == true)
		<li class="xpadding" style="margin:0;padding-top:0;"><a href="#" rel="popover" data-html="true"
			data-content='
			{{ e($group->description) }} <hr><button type="button" class="btn btn-link left-align" data-toggle="collapse" data-target="#members-{{$group->id}}">
				<b>Members: </b>{{ count($group->users) }}</b>
			</button>
			<div id="members-{{ $group->id }}" class="collapse out">
			<ul class="thumbnails" style="margin-left:0">
			@foreach($group->users as $member)
				<li style="margin:0 4px 4px;width:60px;"><a href="/users/{{ $member->username }}" title="{{ $member->username }}"><div class="thumbnail"><img src={{ $member->avatar_url }} /></div></a></li>
			@endforeach
			</ul>
			</div>
			@if(Auth::check())
				<hr>
				{{ Form::open("user/group", "POST", array("class" => "center")) }}
				{{ Form::token() }}
				{{ Form::hidden("id", $group->id) }}
				<?php $auth_user_group = $group->users()->where_user_id(Auth::user()->id)->first(); ?>
				@if($auth_user_group)
					@if($auth_user_group->pivot->invited)
						<button class="btn btn-danger btn-small" name="action" value="leave" type="submit">Leave Group</button>
						@if($auth_user_group->pivot->owner == 1)
						<a href="/groups/edit/{{ $group->id }}" class="btn btn-warning btn-small">Edit Group</a>
						@elseif($auth_user_group->pivot->owner === 0)
						<button class="btn btn-success btn-small" name="action" value="acceptowner" type="submit">Accept Ownership Request</button>
						@endif
					@else
					<button class="btn btn-success btn-small" name="action" value="acceptjoin" type="submit">Accept Join Request</button>
					@endif
				@elseif ($group->open == true)
					<button class="btn btn-success btn-small" name="action" value="join" type="submit">Join Group</button>
				@else
					<b>Group not joinable</b>
				@endif
				{{ Form::close() }}
			@endif
			' data-original-title='{{ $group->name }}'>
			@if($ownpage)
			@if($group->pivot->owner === 0 || $group->pivot->owner === 1)
				<b><i class="icon-ok" title="You own this group"></i> {{ $group->name }}</b>
			@elseif ($group->pivot->invited === 0)
				<b><i class="icon-exclamation-sign" title="You have been invited to this group"></i> {{ $group->name }}</b>
			@else
				<b><i class="icon-group" title="You're a member of this group"></i> {{ $group->name }}</b>
			@endif
			@else
				<b><i class="icon-group"></i> {{ $group->name }}</b>
			@endif
		</a></li>
			@endif
		@empty
		<li class="xpadding">
		<h4 class="center">
			@if($ownpage)You're
			@else{{ $user->username }} is
			@endif not a member of any group :(
			@if($ownpage)<br>You can join or create a group by typing in the box above</div>
			@endif
		</h4>
		</li>
		@endforelse
	</ul>
	</div>
	</div>
</div>
</div>
</div>
@endsection