<script>
	const projects = [
		{
			title: 'Archivio Meraviglioso',
			year: '2022',
			link: 'https://archiviomeraviglioso.it/',
			image: 'archivio_meraviglioso.jpg'
		},
		{
			title: 'RAWGraphs',
			year: '2013–Ongoing',
			link: 'https://www.rawgraphs.io/',
			image: 'rawgraphs.jpg'
		},

		{
			title: 'Global Archives Online',
			year: '2022',
			link: 'https://globalarchives.lnu.se/',
			image: 'global.jpg'
		},

		{
			title: 'Minett Stories',
			year: '2022',
			link: 'https://minett-stories.lu/',
			image: 'minett.jpg'
		},

		{
			title: 'V-Data Research website',
			year: '2022',
			link: 'https://vdataresearch.com/',
			image: 'vdata.jpg'
		},

		{
			title: 'Prospecting an In-Between',
			year: '2021',
			link: 'https://timestrata.be/',
			image: 'timestrata.jpg'
		},

		{
			title: 'Data Availability and Data Gaps (UNDP)',
			year: '2021',
			link: 'https://datagaps.arabdevelopmentportal.com/undp-data-gaps/',
			image: 'undp.jpg'
		},

		{
			title: 'Chemical Youth website',
			year: '2021',
			link: 'https://chemicalyouth.org',
			image: 'chemicalyouth.jpg'
		},

		{
			title: '175 Joer Post',
			year: '2020',
			link: 'https://175anspost.lu/',
			image: '175.jpg'
		},

		{
			title: "BGL, l'histoire d'un siècle",
			year: '2019',
			link: 'https://depuis100ans.lu/',
			image: 'bgl.jpg'
		},

		{
			title: 'Cozy/Flat',
			year: '2018',
			link: 'https://cozyfl.at/',
			image: 'cozy.jpg'
		},

		{
			title: 'Éischte Weltkrich',
			year: '2018',
			link: 'https://ww1.lu/',
			image: 'ww1.jpg'
		}
	];
</script>

<div class="container-fluid px-3 px-md-5 pt-3 pt-md-4">
	<div class="row">
		<div class="col-12 col-md-8">
			<p class="fs-4 lh-sm">
				<span class="text-white">Calibro</span> is a design studio based in Milan focused on tailoring
				visual tools to explore and visualize data, complex information and archives.
			</p>
			<p class="fs-4 lh-sm">
				For new collaborations contact us at <a
					class="text-decoration-none"
					href="mailto:hello@calib.ro"><span class="text-white">hello@calib.ro</span></a
				>
			</p>
			<p class="fs-4 lh-sm">
				We are currently working on a new website {#each Array(3) as loader}
					<img
						class="d-block-inline ms-1"
						src="/img/loading.gif"
						alt="loader"
						width="24"
						height="24"
					/>
				{/each}.
			</p>
			<p class="fs-4">In the meanwhile you can find a selection of projects we have worked on.</p>
		</div>
	</div>
</div>

<div class="container-fluid px-3 px-md-5 pt-3 pt-md-4">
	<div class="row">
		{#each projects as project}
			<div class="col-12 col-md-4">
				<a class="d-block text-body text-decoration-none" href={project.link} target="_blank">
					<div class="position-relative">
						<div class="project rounded-3 position-relative">
							<img
								class="project-thumb position-absolute"
								src={`/img/${project.image}`}
								alt={`preview of ${project.title} project`}
							/>
						</div>
						<div class="info fs-4 lh-sm mt-2">
							<p class="text-decoration-none">
								<span class="text-white">
									{project.title}
								</span><br />{project.year}
							</p>
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<div class="container-fluid px-3 px-md-5 pt-3 pt-md-4">
	<div class="row footer">
		<div class="col-12 col-md-4">
			<p class="fs-4 lh-sm">
				Calibro Srls <br />
				VAT number: IT09323480963
			</p>
		</div>

		<div class="col-12 col-md-4">
			<p class="fs-4 lh-sm">
				Piazza Prealpi 3<br />
				20155 Milano
			</p>
		</div>

		<div class="col-12 col-md-4">
			<p class="fs-4 lh-sm">
				<a href="mailto:hello@calib.ro">hello@calib.ro</a><br />
				<a href="https://twitter.com/studiocalibro">Twitter</a><br />
				<a href="https://www.instagram.com/studiocalibro/">Instagram</a><br />
				<a href="https://github.com/calibro">Github</a><br />
			</p>
		</div>
	</div>
</div>

<style>
	.project {
		background-color: #353432;
		height: 300px;
	}

	.project-thumb {
		width: 80%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: width 1s, height 1s;
	}

	.project-thumb:hover {
		width: 90%;
	}

	.footer {
		color: #555555;
	}

	.footer a {
		color: #555555;
		text-decoration: none;
	}

	.footer a:hover {
		color: #989389;
	}

	@media (min-width: 768px) {
		.project {
			height: 500px;
		}
	}

	@media (min-width: 1900px) {
		.project {
			height: 600px;
		}
	}
</style>
