# `dataMongodbatlasControlPlaneIpAddresses` Submodule <a name="`dataMongodbatlasControlPlaneIpAddresses` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasControlPlaneIpAddresses <a name="DataMongodbatlasControlPlaneIpAddresses" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/control_plane_ip_addresses mongodbatlas_control_plane_ip_addresses}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_control_plane_ip_addresses

dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasControlPlaneIpAddresses resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_control_plane_ip_addresses

dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_control_plane_ip_addresses

dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_control_plane_ip_addresses

dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_control_plane_ip_addresses

dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasControlPlaneIpAddresses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasControlPlaneIpAddresses to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasControlPlaneIpAddresses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.2/docs/data-sources/control_plane_ip_addresses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasControlPlaneIpAddresses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.inbound">inbound</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference">DataMongodbatlasControlPlaneIpAddressesInboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.outbound">outbound</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference">DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `inbound`<sup>Required</sup> <a name="inbound" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.inbound"></a>

```python
inbound: DataMongodbatlasControlPlaneIpAddressesInboundOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference">DataMongodbatlasControlPlaneIpAddressesInboundOutputReference</a>

---

##### `outbound`<sup>Required</sup> <a name="outbound" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.outbound"></a>

```python
outbound: DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference">DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddresses.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasControlPlaneIpAddressesConfig <a name="DataMongodbatlasControlPlaneIpAddressesConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_control_plane_ip_addresses

dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

### DataMongodbatlasControlPlaneIpAddressesInbound <a name="DataMongodbatlasControlPlaneIpAddressesInbound" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_control_plane_ip_addresses

dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound()
```


### DataMongodbatlasControlPlaneIpAddressesOutbound <a name="DataMongodbatlasControlPlaneIpAddressesOutbound" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_control_plane_ip_addresses

dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasControlPlaneIpAddressesInboundOutputReference <a name="DataMongodbatlasControlPlaneIpAddressesInboundOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_control_plane_ip_addresses

dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.aws">aws</a></code> | <code>cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.azure">azure</a></code> | <code>cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.gcp">gcp</a></code> | <code>cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound">DataMongodbatlasControlPlaneIpAddressesInbound</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.aws"></a>

```python
aws: StringListMap
```

- *Type:* cdktf.StringListMap

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.azure"></a>

```python
azure: StringListMap
```

- *Type:* cdktf.StringListMap

---

##### `gcp`<sup>Required</sup> <a name="gcp" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.gcp"></a>

```python
gcp: StringListMap
```

- *Type:* cdktf.StringListMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInboundOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasControlPlaneIpAddressesInbound
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesInbound">DataMongodbatlasControlPlaneIpAddressesInbound</a>

---


### DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference <a name="DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_control_plane_ip_addresses

dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.aws">aws</a></code> | <code>cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.azure">azure</a></code> | <code>cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.gcp">gcp</a></code> | <code>cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound">DataMongodbatlasControlPlaneIpAddressesOutbound</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.aws"></a>

```python
aws: StringListMap
```

- *Type:* cdktf.StringListMap

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.azure"></a>

```python
azure: StringListMap
```

- *Type:* cdktf.StringListMap

---

##### `gcp`<sup>Required</sup> <a name="gcp" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.gcp"></a>

```python
gcp: StringListMap
```

- *Type:* cdktf.StringListMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasControlPlaneIpAddressesOutbound
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasControlPlaneIpAddresses.DataMongodbatlasControlPlaneIpAddressesOutbound">DataMongodbatlasControlPlaneIpAddressesOutbound</a>

---



