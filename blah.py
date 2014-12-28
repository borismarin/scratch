scr = ["wget http://repo.continuum.io/miniconda/Miniconda-latest-Linux-x86_64.sh -O miniconda.sh",
        "ls"
        "bash miniconda.sh -b -p $TRAVIS_BUILD_DIR",
        "export PATH=TRAVIS_BUILD_DIR/miniconda/bin:$PATH",
        "conda config --set always_yes yes --set changeps1 no",
        "conda update -q conda",
        "conda info -a",
        "export OMV_VENV=omv_$OMV_ENGINE",
        "conda create --yes -n $OMV_VENV python=$TRAVIS_PYTHON_VERSION pip numpy scipy",
        "conda install -n $OMV_VENV -c https://conda.binstar.org/borismarin conda-api"
        "source activate $OMV_VENV"]
print '{'
for li in scr:
    print li, ';'
print '}'



