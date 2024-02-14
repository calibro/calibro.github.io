<script>
	const projects = [

	{
			title: 'RAWGraphs',
			year: '2013–Ongoing',
			description: 'A free and open source tool for data visualization',
			link: 'https://www.rawgraphs.io/',
			image: 'rawgraphs.jpg'
		},
		{
			title: 'Archivio Meraviglioso',
			description: 'A project to discover the history of a Milanese charitable organization',
			year: '2022',
			link: 'https://archiviomeraviglioso.it/',
			image: 'archivio_meraviglioso.jpg'
		},
		{
			title: 'Digital Benin',
			description: 'A project about data',
			year: '2023-Ongoing',
			link: 'https://digitalbenin.org/',
			image: 'digital-benin.jpg'
		},	
		{
			title: '175 Joer Post',
			description: 'A project about the history of the Entreprise des Postes et Télécommunications of Luxembourg',
			year: '2020',
			link: 'https://175anspost.lu/',
			image: '175.jpg'
		},
		{
			title: 'The Palestinian Museum Digital Archive',
			description: 'A website to discover thousands of documents about the History of Palestine and its people',
			year: '2022-2023',
			link: 'https://countryofwords.supdigital.org/timeline/',
			image: 'palarchive.png'
		},	
		{
			title: 'Global Archives Online',
			description: 'A directory of open digital collections for the study of colonial and global history',
			year: '2022',
			link: 'https://globalarchives.lnu.se/',
			image: 'global.jpg'
		},
		{
			title: 'Country of Words',
			description: 'A digital transnational atlas for Palestinian Literature',
			year: '2023',
			link: 'https://countryofwords.supdigital.org/timeline/',
			image: 'palread.png'
		},	
		{
			title: 'Sai cosa respiri?',
			description: 'A digital experience to explore the concentration of NO2 in Milan',
			year: '2022',
			link: 'https://calib.ro/cpl-no2/',
			image: 'no2map.png'
		},	
		{
			title: 'Minett Stories',
			description: 'A digital publication about  the multiple histories and identities of a region',
			year: '2022',
			link: 'https://minett-stories.lu/',
			image: 'minett.jpg'
		},

		{
			title: 'V-Data Research website',
			description: 'A website for a research about the value of digital data and surveillance capitalism',
			year: '2022',
			link: 'https://vdataresearch.com/',
			image: 'vdata.jpg'
		},

		{
			title: 'DEPT.',
			description: 'A series of workshops and exhibitions on ways to describe our present condition',
			year: '2019',
			link: 'https://dept.today/workshops/out-there.html',
			image: 'drugo-4.jpg'
		},

		{
			title: 'Prospecting an In-Between',
			description: 'A website about the history and identities of the region Eupen-Malmedy-Sankt Vith',
			year: '2021',
			link: 'https://timestrata.be/',
			image: 'timestrata.jpg'
		},

		{
			title: 'Data Availability and Data Gaps (UNDP)',
			description: 'Putting a spotlight on data gaps to mobilize collective action and support in the Arab region',
			year: '2021',
			link: 'https://datagaps.arabdevelopmentportal.com/undp-data-gaps/',
			image: 'undp.jpg'
		},

		{
			title: 'Chemical Youth',
			description: 'A website to explore a research project about the use of chemicals in everyday life of youth',
			year: '2021',
			link: 'https://chemicalyouth.org',
			image: 'chemicalyouth.jpg'
		},

		{
			title: "BGL, l'histoire d'un siècle",
			description: 'Retracing the history of BGL BNP Paribas from 1919 to the present day',
			year: '2019',
			link: 'https://depuis100ans.lu/',
			image: 'bgl.jpg'
		},

		{
			title: 'Cozy/Flat',
			description: 'A visual inquiry into the private spaces we share on Airbnb',
			year: '2018',
			link: 'https://cozyfl.at/',
			image: 'cozy.jpg'
		},
		{
			title: 'Éischte Weltkrich',
			description: 'A website to remember the Great War in Luxembourg',
			year: '2018',
			link: 'https://ww1.lu/',
			image: 'ww1.jpg'
		},
		{
			title: 'The Anthropocene Observatory Explorer',
			description: 'An interactive installation at ZKM to explore an archive of interviews about the Antrhopocene',
			year: '2015',
			link: 'https://calib.ro/anthropoceneobservatory/',
			image: 'antrhropocene.jpeg'
		}
	];
</script>

<div class="container-fluid px-3 px-md-5 pt-3 pt-md-4">
	<div class="row">
		<div class="col-12 col-md-8">
			<p class="fs-4 lh-sm">
				<span class="text-white">Calibro</span> is a design studio founded by Matteo Azzi and Giorgio Uboldi based in Milan focused on tailoring
				visual tools to explore and visualize data, complex information and archives.
			</p>

			<p class="fs-4 lh-sm">
				<span class="text-white">Calibro</span> does research and teaches at Design Academy Eindhoven, UNIRSM Design, ISIA Urbino, Cfp Bauer and Scuola Politecnica di Design.
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
									{project.title} <span class="text-grey">{project.description} </span>
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
