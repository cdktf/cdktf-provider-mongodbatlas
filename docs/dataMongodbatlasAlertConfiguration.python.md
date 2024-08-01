# `dataMongodbatlasAlertConfiguration` Submodule <a name="`dataMongodbatlasAlertConfiguration` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasAlertConfiguration <a name="DataMongodbatlasAlertConfiguration" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/alert_configuration mongodbatlas_alert_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alert_configuration_id: str,
  project_id: str,
  output: typing.Union[IResolvable, typing.List[DataMongodbatlasAlertConfigurationOutput]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.alertConfigurationId">alert_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/alert_configuration#alert_configuration_id DataMongodbatlasAlertConfiguration#alert_configuration_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/alert_configuration#project_id DataMongodbatlasAlertConfiguration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.output">output</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>]]</code> | output block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alert_configuration_id`<sup>Required</sup> <a name="alert_configuration_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.alertConfigurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/alert_configuration#alert_configuration_id DataMongodbatlasAlertConfiguration#alert_configuration_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/alert_configuration#project_id DataMongodbatlasAlertConfiguration#project_id}.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.Initializer.parameter.output"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>]]

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/alert_configuration#output DataMongodbatlasAlertConfiguration#output}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.putOutput">put_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.resetOutput">reset_output</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_output` <a name="put_output" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.putOutput"></a>

```python
def put_output(
  value: typing.Union[IResolvable, typing.List[DataMongodbatlasAlertConfigurationOutput]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.putOutput.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>]]

---

##### `reset_output` <a name="reset_output" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.resetOutput"></a>

```python
def reset_output() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasAlertConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasAlertConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasAlertConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasAlertConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/alert_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasAlertConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.matcher">matcher</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList">DataMongodbatlasAlertConfigurationMatcherList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.metricThresholdConfig">metric_threshold_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList">DataMongodbatlasAlertConfigurationMetricThresholdConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList">DataMongodbatlasAlertConfigurationNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.output">output</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList">DataMongodbatlasAlertConfigurationOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.thresholdConfig">threshold_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList">DataMongodbatlasAlertConfigurationThresholdConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.updated">updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.alertConfigurationIdInput">alert_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.outputInput">output_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.alertConfigurationId">alert_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.matcher"></a>

```python
matcher: DataMongodbatlasAlertConfigurationMatcherList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList">DataMongodbatlasAlertConfigurationMatcherList</a>

---

##### `metric_threshold_config`<sup>Required</sup> <a name="metric_threshold_config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.metricThresholdConfig"></a>

```python
metric_threshold_config: DataMongodbatlasAlertConfigurationMetricThresholdConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList">DataMongodbatlasAlertConfigurationMetricThresholdConfigList</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.notification"></a>

```python
notification: DataMongodbatlasAlertConfigurationNotificationList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList">DataMongodbatlasAlertConfigurationNotificationList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.output"></a>

```python
output: DataMongodbatlasAlertConfigurationOutputList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList">DataMongodbatlasAlertConfigurationOutputList</a>

---

##### `threshold_config`<sup>Required</sup> <a name="threshold_config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.thresholdConfig"></a>

```python
threshold_config: DataMongodbatlasAlertConfigurationThresholdConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList">DataMongodbatlasAlertConfigurationThresholdConfigList</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.updated"></a>

```python
updated: str
```

- *Type:* str

---

##### `alert_configuration_id_input`<sup>Optional</sup> <a name="alert_configuration_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.alertConfigurationIdInput"></a>

```python
alert_configuration_id_input: str
```

- *Type:* str

---

##### `output_input`<sup>Optional</sup> <a name="output_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.outputInput"></a>

```python
output_input: typing.Union[IResolvable, typing.List[DataMongodbatlasAlertConfigurationOutput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>]]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `alert_configuration_id`<sup>Required</sup> <a name="alert_configuration_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.alertConfigurationId"></a>

```python
alert_configuration_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasAlertConfigurationConfig <a name="DataMongodbatlasAlertConfigurationConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alert_configuration_id: str,
  project_id: str,
  output: typing.Union[IResolvable, typing.List[DataMongodbatlasAlertConfigurationOutput]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.alertConfigurationId">alert_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/alert_configuration#alert_configuration_id DataMongodbatlasAlertConfiguration#alert_configuration_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/alert_configuration#project_id DataMongodbatlasAlertConfiguration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.output">output</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>]]</code> | output block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alert_configuration_id`<sup>Required</sup> <a name="alert_configuration_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.alertConfigurationId"></a>

```python
alert_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/alert_configuration#alert_configuration_id DataMongodbatlasAlertConfiguration#alert_configuration_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/alert_configuration#project_id DataMongodbatlasAlertConfiguration#project_id}.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationConfig.property.output"></a>

```python
output: typing.Union[IResolvable, typing.List[DataMongodbatlasAlertConfigurationOutput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>]]

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/alert_configuration#output DataMongodbatlasAlertConfiguration#output}

---

### DataMongodbatlasAlertConfigurationMatcher <a name="DataMongodbatlasAlertConfigurationMatcher" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcher.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcher()
```


### DataMongodbatlasAlertConfigurationMetricThresholdConfig <a name="DataMongodbatlasAlertConfigurationMetricThresholdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfig()
```


### DataMongodbatlasAlertConfigurationNotification <a name="DataMongodbatlasAlertConfigurationNotification" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotification.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotification()
```


### DataMongodbatlasAlertConfigurationOutput <a name="DataMongodbatlasAlertConfigurationOutput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput(
  type: str,
  label: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/alert_configuration#type DataMongodbatlasAlertConfiguration#type}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/alert_configuration#label DataMongodbatlasAlertConfiguration#label}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/alert_configuration#type DataMongodbatlasAlertConfiguration#type}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.5/docs/data-sources/alert_configuration#label DataMongodbatlasAlertConfiguration#label}.

---

### DataMongodbatlasAlertConfigurationThresholdConfig <a name="DataMongodbatlasAlertConfigurationThresholdConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasAlertConfigurationMatcherList <a name="DataMongodbatlasAlertConfigurationMatcherList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAlertConfigurationMatcherOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAlertConfigurationMatcherOutputReference <a name="DataMongodbatlasAlertConfigurationMatcherOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcher">DataMongodbatlasAlertConfigurationMatcher</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcherOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAlertConfigurationMatcher
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMatcher">DataMongodbatlasAlertConfigurationMatcher</a>

---


### DataMongodbatlasAlertConfigurationMetricThresholdConfigList <a name="DataMongodbatlasAlertConfigurationMetricThresholdConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference <a name="DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.units">units</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfig">DataMongodbatlasAlertConfigurationMetricThresholdConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.units"></a>

```python
units: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAlertConfigurationMetricThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationMetricThresholdConfig">DataMongodbatlasAlertConfigurationMetricThresholdConfig</a>

---


### DataMongodbatlasAlertConfigurationNotificationList <a name="DataMongodbatlasAlertConfigurationNotificationList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAlertConfigurationNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAlertConfigurationNotificationOutputReference <a name="DataMongodbatlasAlertConfigurationNotificationOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.apiToken">api_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.datadogApiKey">datadog_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.datadogRegion">datadog_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.delayMin">delay_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.emailEnabled">email_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.intervalMin">interval_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.microsoftTeamsWebhookUrl">microsoft_teams_webhook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.mobileNumber">mobile_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.notifierId">notifier_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.opsGenieApiKey">ops_genie_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.opsGenieRegion">ops_genie_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.serviceKey">service_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.smsEnabled">sms_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.teamName">team_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.victorOpsApiKey">victor_ops_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.victorOpsRoutingKey">victor_ops_routing_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.webhookSecret">webhook_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.webhookUrl">webhook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotification">DataMongodbatlasAlertConfigurationNotification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_token`<sup>Required</sup> <a name="api_token" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.apiToken"></a>

```python
api_token: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `datadog_api_key`<sup>Required</sup> <a name="datadog_api_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.datadogApiKey"></a>

```python
datadog_api_key: str
```

- *Type:* str

---

##### `datadog_region`<sup>Required</sup> <a name="datadog_region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.datadogRegion"></a>

```python
datadog_region: str
```

- *Type:* str

---

##### `delay_min`<sup>Required</sup> <a name="delay_min" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.delayMin"></a>

```python
delay_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `email_enabled`<sup>Required</sup> <a name="email_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.emailEnabled"></a>

```python
email_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `interval_min`<sup>Required</sup> <a name="interval_min" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.intervalMin"></a>

```python
interval_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `microsoft_teams_webhook_url`<sup>Required</sup> <a name="microsoft_teams_webhook_url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.microsoftTeamsWebhookUrl"></a>

```python
microsoft_teams_webhook_url: str
```

- *Type:* str

---

##### `mobile_number`<sup>Required</sup> <a name="mobile_number" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.mobileNumber"></a>

```python
mobile_number: str
```

- *Type:* str

---

##### `notifier_id`<sup>Required</sup> <a name="notifier_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.notifierId"></a>

```python
notifier_id: str
```

- *Type:* str

---

##### `ops_genie_api_key`<sup>Required</sup> <a name="ops_genie_api_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.opsGenieApiKey"></a>

```python
ops_genie_api_key: str
```

- *Type:* str

---

##### `ops_genie_region`<sup>Required</sup> <a name="ops_genie_region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.opsGenieRegion"></a>

```python
ops_genie_region: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_key`<sup>Required</sup> <a name="service_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.serviceKey"></a>

```python
service_key: str
```

- *Type:* str

---

##### `sms_enabled`<sup>Required</sup> <a name="sms_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.smsEnabled"></a>

```python
sms_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

##### `team_name`<sup>Required</sup> <a name="team_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.teamName"></a>

```python
team_name: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `victor_ops_api_key`<sup>Required</sup> <a name="victor_ops_api_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.victorOpsApiKey"></a>

```python
victor_ops_api_key: str
```

- *Type:* str

---

##### `victor_ops_routing_key`<sup>Required</sup> <a name="victor_ops_routing_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.victorOpsRoutingKey"></a>

```python
victor_ops_routing_key: str
```

- *Type:* str

---

##### `webhook_secret`<sup>Required</sup> <a name="webhook_secret" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.webhookSecret"></a>

```python
webhook_secret: str
```

- *Type:* str

---

##### `webhook_url`<sup>Required</sup> <a name="webhook_url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.webhookUrl"></a>

```python
webhook_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotificationOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAlertConfigurationNotification
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationNotification">DataMongodbatlasAlertConfigurationNotification</a>

---


### DataMongodbatlasAlertConfigurationOutputList <a name="DataMongodbatlasAlertConfigurationOutputList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAlertConfigurationOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataMongodbatlasAlertConfigurationOutput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>]]

---


### DataMongodbatlasAlertConfigurationOutputOutputReference <a name="DataMongodbatlasAlertConfigurationOutputOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.resetLabel">reset_label</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_label` <a name="reset_label" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutputOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataMongodbatlasAlertConfigurationOutput]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationOutput">DataMongodbatlasAlertConfigurationOutput</a>]

---


### DataMongodbatlasAlertConfigurationThresholdConfigList <a name="DataMongodbatlasAlertConfigurationThresholdConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAlertConfigurationThresholdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAlertConfigurationThresholdConfigOutputReference <a name="DataMongodbatlasAlertConfigurationThresholdConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_alert_configuration

dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.units">units</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfig">DataMongodbatlasAlertConfigurationThresholdConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.units"></a>

```python
units: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAlertConfigurationThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAlertConfiguration.DataMongodbatlasAlertConfigurationThresholdConfig">DataMongodbatlasAlertConfigurationThresholdConfig</a>

---



