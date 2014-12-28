scr = ["wget http://repo.continuum.io/miniconda/Miniconda-latest-Linux-x86_64.sh -O miniconda.sh;",
        "sh miniconda.sh -b -p $TRAVIS_BUILD_DIR;",
        "export PATH=TRAVIS_BUILD_DIR/miniconda/bin:$PATH;",
        "conda config --set always_yes yes --set changeps1 no;",
        "conda update -q conda;",
        "conda info -a;",
        "export OMV_VENV=omv_$OMV_ENGINE;",
        "conda create --yes -n $OMV_VENV python=$TRAVIS_PYTHON_VERSION pip numpy matplotlib nose;",
        "source activate $OMV_VENV;"]
for li in scr:
    print li




