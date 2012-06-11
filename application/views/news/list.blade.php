@layout("layout.main")

@section('content')
<header id="pageheader"><br class="clearfix"></header>
<div class="content" id="news">
<div id="articles">
	@foreach($newslist->results as $article)
<article class="post">
	<h2 class="title">{{ HTML::link_to_action("news@view", $article->title, array($article->id, $article->slug)) }}</h2>
		<p class="meta">
		<span class="date">{{ HTML::entities(date("F j, Y g:ia", strtotime($article->created_at))) }}</span><span class="posted">By <a href="#">{{ $article->user->username }}</a></span>
		</p>
<div class="entry">
		{{ HTML::image($article->image->file_large, "Image") }}
		{{ nl2br(e($article->summary)) }}
		<p class="links"><a href="#">Read More</a>   |   <a href="#">Comments</a></p>
</div>
</article>
@endforeach
<div class="pagination">
  <ul>
    <li>{{ $newslist->previous() }}</li>
          {{ $newslist->slider() }}
    <li>{{ $newslist->next() }}</li>
  </ul>
</div>
</div>

<aside id="sidebar">
<ul>
						<li>
							<h2>Search Here:</h2>
							<div id="search" >
								<form method="get" action="#">
									<div>
										<input type="text" name="s" id="search-text" value="" />
										<input type="submit" id="search-submit" value="" />
									</div>
								</form>
							</div>
							<div style="clear: both;">&nbsp;</div>
						</li>
						<li>
							<h2>Aliquam tempus</h2>
							<p>Mauris vitae nisl nec metus placerat perdiet est. Phasellus dapibus semper consectetuer hendrerit.</p>
						</li>
						<li>
							<h2>Categories</h2>
							<ul>
								<li><a href="#">Aliquam libero</a></li>
								<li><a href="#">Consectetuer adipiscing elit</a></li>
								<li><a href="#">Metus aliquam pellentesque</a></li>
								<li><a href="#">Suspendisse iaculis mauris</a></li>
								<li><a href="#">Urnanet non molestie semper</a></li>
								<li><a href="#">Proin gravida orci porttitor</a></li>
							</ul>
						</li>
						<li>
							<h2>Blogroll</h2>
							<ul>
								<li><a href="#">Aliquam libero</a></li>
								<li><a href="#">Consectetuer adipiscing elit</a></li>
								<li><a href="#">Metus aliquam pellentesque</a></li>
								<li><a href="#">Suspendisse iaculis mauris</a></li>
								<li><a href="#">Urnanet non molestie semper</a></li>
								<li><a href="#">Proin gravida orci porttitor</a></li>
							</ul>
						</li>
						<li>
							<h2>Archives</h2>
							<ul>
								<li><a href="#">Aliquam libero</a></li>
								<li><a href="#">Consectetuer adipiscing elit</a></li>
								<li><a href="#">Metus aliquam pellentesque</a></li>
								<li><a href="#">Suspendisse iaculis mauris</a></li>
								<li><a href="#">Urnanet non molestie semper</a></li>
								<li><a href="#">Proin gravida orci porttitor</a></li>
							</ul>
						</li>
					</ul>
</aside>
<br class="clearfix">
</div>
@endsection