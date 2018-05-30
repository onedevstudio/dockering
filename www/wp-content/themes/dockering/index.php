<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
		<?php wp_head(); ?>
	</head>
	<body <?php body_class() ?>>
		<main class="hero">
			<div class="hero__inner">
				<h1 class="hero__title"><?= $theme->get('Name'); ?> </h1>
				<p class="hero__lead"><?= $theme->get('Description'); ?></p>
			</div>
			<small class="hero__version">version: <?= $theme->get('Version'); ?></small>
		</main>
		<?php wp_footer(); ?>
	</body>
</html>
